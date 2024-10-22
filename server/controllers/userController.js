import {Webhook} from 'svix'
// API controller function to manage clerk user with database

// API end point
// http://localhost:4000/api/user/webhooks
const clerkWebHooks = async (req, res) => {
    try {
        const whook = new Webhook(process.env.CLERK_WEBHOOK_SECRET)
        
    } catch (error) {
        
    }
}