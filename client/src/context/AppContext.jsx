import { createContext, useState } from 'react';
import axios from 'axios';
import { useAuth } from '@clerk/clerk-react';
import { toast } from 'react-toastify';

// Create the AppContext
export const AppContext = createContext();

const AppContextProvider = (props) => {
  const [credit, setCredit] = useState(false);
  const { getToken } = useAuth();
  const backendUrl = import.meta.env.VITE_BACKEND_URL;

  // Function to load credit data
  const loadCreditsData = async () => {
    try {
      const token = await getToken();
      const { data } = await axios.get(backendUrl + '/api/user/credits', { headers: { token } });

      if (data.success) {
        setCredit(data.credits);
        console.log(data.credits);
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
  };

  return <AppContext.Provider value={value}>{props.children}</AppContext.Provider>;
};

// Only export AppContextProvider as default, AppContext is exported as named
export default AppContextProvider;
