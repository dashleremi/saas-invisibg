import axios from "axios";
import fs from "fs";
import FormData from "form-data";
import userModel from "../models/usesrModel.js";

// remove bg from image
const removeBgImage = async (req, res) => {
    try {
      const { clerkId } = req.body;
  
      // Check if clerkId exists
      if (!clerkId) {
        return res.json({ success: false, message: "Clerk ID is missing." });
      }
  
      const user = await userModel.findOne({ clerkId });
  
      // Check if user is found
      if (!user) {
        return res.json({ success: false, message: "User not found." });
      }
  
      // Check if creditBalance exists and is a number
      if (user.creditBalance === undefined || user.creditBalance === null) {
        return res.json({ success: false, message: "User has no credit balance." });
      }
  
      // Check if user has no credits left
      if (user.creditBalance === 0) {
        return res.json({
          success: false,
          message: "No credit balance",
          creditBalance: user.creditBalance,
        });
      }
  
      // Check if the file was uploaded
      if (!req.file) {
        return res.json({
          success: false,
          message: "No image uploaded.",
        });
      }
  
      const imagePath = req.file.path;
  
      // Reading image file
      const imageFile = fs.createReadStream(imagePath);
  
      const formdata = new FormData();
      formdata.append("image_file", imageFile);
  
      // Make the request to remove the background
      const { data } = await axios.post(
        "https://clipdrop-api.co/remove-background/v1",
        formdata,
        {
          headers: {
            "x-api-key": process.env.CLIPDROP_API,
          },
          responseType: "arraybuffer",
        }
      );
  
      const base64Image = Buffer.from(data, "binary").toString("base64");
      const resultImage = `data:${req.file.mimetype};base64,${base64Image}`;
  
      // Deduct one credit from the user's account
      await userModel.findByIdAndUpdate(user._id, {
        creditBalance: user.creditBalance - 1,
      });
  
      // Return success response with the processed image
      res.json({
        success: true,
        resultImage,
        creditBalance: user.creditBalance - 1,
        message: 'Background removed successfully'
      });
  
    } catch (error) {
      console.log(error.message);
      res.json({ success: false, message: error.message });
    }
  };
  

export { removeBgImage };
