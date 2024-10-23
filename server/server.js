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
  