import { createContext, useState } from 'react';
import axios from 'axios';
import { useAuth, useClerk, useUser } from '@clerk/clerk-react';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

// Create the AppContext
export const AppContext = createContext();

const AppContextProvider = (props) => {
  const [credit, setCredit] = useState(null);   // Start with null for credit (or 0 if you want a default value)
  const [image, setImage] = useState(null);     // Start with null since image will hold data, not a boolean
  const [resultImage, setResultImage] = useState(null); // Same for result image

  const backendUrl = import.meta.env.VITE_BACKEND_URL;
  const navigate = useNavigate();

  const { getToken } = useAuth();
  const { isSignedIn } = useUser();
  const { openSignIn } = useClerk();
  const { user } = useUser();  // Get user from Clerk

  // Function to load credit data
  const loadCreditsData = async () => {
    try {
      const token = await getToken();
  
      if (!token) {
        toast.error("Failed to authenticate. Please sign in again.");
        return;
      }
  
      const clerkId = user?.id; // Ensure `user` is not null
      if (!clerkId) {
        toast.error("User information is missing. Please sign in again.");
        return;
      }
  
      // Perform the API request to fetch user credits
      const { data } = await axios.get(`${backendUrl}/api/user/credits?clerkId=${clerkId}`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
  
      console.log("Backend response", data); // Log the backend response
  
      if (data.success) {
        setCredit(data.credits);
        console.log(data.credits);
      } else {
        toast.error(data.message || "Failed to load credits.");
      }
    } catch (error) {
      console.error("Error loading credit data:", error);
      toast.error(error.response?.data?.message || "Error loading credit data.");
    }
  };
  

  

  const removeBg = async (image) => {
    // Check if an image is provided
    if (!image) {
      toast.error("No image selected.");
      return;
    }
  
    try {
      if (!isSignedIn) {
        return openSignIn();  // Prompt user to sign in
      }
  
      setImage(image);
      setResultImage(null);  // Clear the previous result image if any
  
      navigate('/after');  // Navigate to the 'after' page
  
      const token = await getToken();

      // Ensure the token is not null or undefined
      if (!token) {
        toast.error("Failed to authenticate. Please sign in again.");
        return;
      }
  
      const formData = new FormData();
      formData.append('image', image); // Ensure this key matches backend expectations
  
      const { data } = await axios.post(`${backendUrl}/api/image/remove-bg`, formData, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
  
      if (data.success) {
        setResultImage(data.resultImage);
        if (data.creditBalance !== undefined) {
          setCredit(data.creditBalance);
        }
      } else {
        toast.error(data.message);
        if (data.creditBalance !== undefined) {
          setCredit(data.creditBalance);
        }
        if (data.creditBalance === 0) {
          navigate('/buy');  // Redirect to buy page if no credits
        }
      }
    } catch (error) {
      console.error(error);
      toast.error(error.response?.data?.message || "Error removing background.");
    }
  };
  
  const value = {
    credit,
    setCredit,
    loadCreditsData,
    backendUrl,
    image, setImage,
    removeBg,
    resultImage, setResultImage
  };

  // eslint-disable-next-line react/prop-types
  return (
    // eslint-disable-next-line react/prop-types
    <AppContext.Provider value={value}>{props.children}</AppContext.Provider>
  ); 
};

// Only export AppContextProvider as default, AppContext is exported as named
export default AppContextProvider;
