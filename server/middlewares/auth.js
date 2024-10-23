import jwt from 'jsonwebtoken';

// Middleware to verify and decode JWT, then attach clerkId to req object
const authUser = async (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;

    // Check if the authorization header exists and starts with "Bearer"
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return res.status(401).json({ success: false, message: 'Not authorized, token missing.' });
    }

    // Extract the token from "Bearer <token>"
    const token = authHeader.split(' ')[1]; 

    // You can choose whether to verify the token yourself (using your secret) or rely on Clerk's verification.
    // Option 1: Verify the token using your secret (if you're handling this yourself)
    let token_decode;
    try {
      token_decode = jwt.verify(token, process.env.JWT_SECRET); // Ensure you have this JWT secret set in .env
    } catch (error) {
      return res.status(401).json({ success: false, message: 'Invalid or expired token.' });
    }

    // Option 2: Skip verification if Clerk handles it (you'd just decode)
    // token_decode = jwt.decode(token); // Uncomment if Clerk handles token verification

    // Ensure clerkId is present in the decoded token
    if (!token_decode.clerkId) {
      return res.status(401).json({ success: false, message: 'Invalid token, clerkId missing.' });
    }

    // Attach the clerkId to the req object for further processing in subsequent middlewares or route handlers
    req.clerkId = token_decode.clerkId;

    // Proceed to the next middleware or route handler
    next();
  } catch (error) {
    console.error("JWT verification error:", error.message);
    return res.status(500).json({ success: false, message: 'Server error during token validation.' });
  }
};

export default authUser;
