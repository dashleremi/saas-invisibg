import axios from "axios";
import fs from "fs";
import FormData from "form-data";
import userModel from "../models/userModel.js";

// Remove background from image
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
    
    // Check if user has credits
    if (user.creditBalance === 0) {
      return res.json({
        success: false,
        message: "No credit balance",
        creditBalance: user.creditBalance,
      });
    }

    // Check if file is uploaded
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

    // Make the request to ClipDrop API
    const { data } = await axios.post(
      "https://clipdrop-api.co/remove-background/v1",
      formdata,
      {
        headers: {
          "x-api-key": process.env.CLIPDROP_API,
        },
        responseType: "arraybuffer",  // Expecting binary data
      }
    ).catch((error) => {
      console.error("Error during API request:", error.response?.data || error.message);
      throw new Error("Failed to connect to the ClipDrop API.");
    });

    // Convert binary data to base64 format
    const base64Image = Buffer.from(data, "binary").toString("base64");
    const resultImage = `data:${req.file.mimetype};base64,${base64Image}`;

    // Deduct 1 credit from user's account
    user.creditBalance -= 1;
    await user.save();  // Save the updated credit balance in the database

    // Return success response with the processed image and new credit balance
    res.json({
      success: true,
      resultImage,
      creditBalance: user.creditBalance,
      message: 'Background removed successfully',
    });

  } catch (error) {
    console.log("Error in removeBgImage:", error.message);
    res.json({ success: false, message: error.message });
  }
};

export { removeBgImage };
