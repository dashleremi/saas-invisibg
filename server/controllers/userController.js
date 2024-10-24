import {Webhook} from 'svix'
import userModel from '../models/userModel.js'
// API controller function to manage clerk user with database

// API end point
// http://localhost:4000/api/user/webhooks
const clerkWebHooks = async (req, res) => {
    try {
        const whook = new Webhook(process.env.CLERK_WEBHOOK_SECRET)

        await whook.verify(JSON.stringify(req.body), {
            "svix-id":req.headers["svix-id"],
            "svix-timestamp":req.headers["svix-timestamp"],
            "svix-signature":req.headers["svix-signature"]
        })

        const {data, type} = req.body

        switch (type) {
            case "user.created": {
                const userData = {
                    clerkId: data.id,
                    email: data.email_addresses[0].email.address,
                    firstName: data.first_name,
                    lastName: data.last_name,
                    photo: data.image_url
                }
                await userModel.create(userData)
                res.json({})

                break;
            }
            case "user.updated": {
                const userData = {
                    email: data.email_addresses[0].email.address,
                    firstName: data.first_name,
                    lastName: data.last_name,
                    photo: data.image_url
                }

                await userModel.findOneAndUpdate({clerkId:data.id}, userData)
                res.json({})

                break;
            }
            case "user.deleted": {
                await userModel.findOneAndDelete({clerkId:data.id})
                res.json({})

                break;
            }
            default:
                break;
        }

    } catch (error) {
        console.log(error.message)
        res.json({success:false, message:error.message})
        
    }
}

// API controller function to get user available creds data
const userCredits = async (req, res) => {
    try {
      const { clerkId } = req.query; // Ensure the clerkId is coming from the query
  
      console.log("Received clerkId:", clerkId);
  
      if (!clerkId) {
        return res.json({ success: false, message: "Clerk ID is missing." });
      }
  
      const userData = await userModel.findOne({ clerkId });
  
      if (!userData) {
        console.log("User not found for clerkId:", clerkId);
        return res.json({ success: false, message: "User not found." });
      }
  
      console.log("User found:", userData);  // Log full user data
  
      res.json({ success: true, credits: userData.creditBalance });
    } catch (error) {
      console.log("Error fetching user data:", error.message);
      res.json({ success: false, message: error.message });
    }
  };
  
  
  

export {clerkWebHooks, userCredits}