import jwt from "jsonwebtoken";

export const authMiddleware = (req, res, next) => {
    try {
        // Check for token in cookies
        const token = req.cookies.token;
        if (!token) {
            return res.status(401).json({ message: "Unauthorized: No token provided" });
        }

        // Verify token
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        
        // Attach decoded user data to request
        req.user = decoded;
        
        // Proceed to the next middleware/route handler
        next();
    } catch (error) {
        console.log("error in authmiddleware", error);
        return res.status(403).json({ message: "Invalid token" });
      }
      
};
