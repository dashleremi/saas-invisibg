import { createContext, useState } from 'react';
import axios from 'axios';
import { useAuth, useClerk, useUser } from '@clerk/clerk-react';
import { toast } from 'react-toastify';
import { Form, useNavigate } from 'react-router-dom';

// Create the AppContext
export const AppContext = createContext();

const AppContextProvider = (props) => {
  const [credit, setCredit] = useState(false);
  const [image, setImage] = useState(false);
  const [resultImage, setResultImage] = useState(false);

  const backendUrl = import.meta.env.VITE_BACKEND_URL;
  const navigate = useNavigate();

  const { getToken } = useAuth();
  const {isSignedIn} = useUser();
  const {openSignIn} = useClerk();



  // Function to load credit data
  const loadCreditsData = async () => {
    try {
      const token = await getToken();
      const { data } = await axios.get(backendUrl + '/api/user/credits', { 
        headers: { 
          Authorization: `Bearer ${token}` 
        } 
      });
  
      if (data.success) {
        setCredit(data.credits);
        console.log(data.credits);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  const removeBg = async (image) => {
    if (!image) {
      toast.error("No image selected.");
      return;
    }
  
    try {
      if (!isSignedIn) {
        return openSignIn();
      }
  
      setImage(image);
      setResultImage(false);
  
      navigate('/after');
  
      const token = await getToken();
  
      const formData = new FormData();
      formData.append('image', image); // Adjust key based on backend expectation
  
      const { data } = await axios.post(backendUrl + '/api/image/remove-bg', formData, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
  
      if (data.success) {
        setResultImage(data.resultImage);
        data.creditBalance && setCredit(data.creditBalance);
      } else {
        toast.error(data.message);
        data.creditBalance && setCredit(data.creditBalance);
        if (data.creditBalance === 0) {
          navigate('/buy');
        }
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
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

  return <AppContext.Provider value={value}>{props.children}</AppContext.Provider>;
};

// Only export AppContextProvider as default, AppContext is exported as named
export default AppContextProvider;
