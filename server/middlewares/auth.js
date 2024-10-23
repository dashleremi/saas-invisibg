import jwt from 'jsonwebtoken';

// Middleware to verify and decode JWT, then attach clerkId to req object
const authUser = async (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return res.status(401).json({ success: false, message: 'Not authorized, token missing.' });
    }

    const token = authHeader.split(' ')[1]; // Extract the token from "Bearer <token>"

    // Verify the token using the secret or public key
    const token_decode = jwt.verify(token, process.env.JWT_SECRET); // Use your JWT secret

    // Attach the clerkId to the req object
    req.clerkId = token_decode.clerkId;

    // Proceed to the next middleware or route handler
    next();
  } catch (error) {
    console.error("JWT verification error:", error.message);
    return res.status(401).json({ success: false, message: 'Invalid or expired token.' });
  }
};

export default authUser;
