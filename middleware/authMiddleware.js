import jwt from "jsonwebtoken";

export const authMiddleware = (req,res,next) => {
    try {
        const token = req.cookies.token;
        if(!token) return res.json({message:"Unathorized"})

        const decoded = jwt.verify(token,process.env.JWT_SECRET);
        // console.log(decoded)
        req.user = decoded;
        next();
    } catch (error) {
        console.log("error in authmiddleware",error);
    }
}

// import jwt from "jsonwebtoken";

// export const authMiddleware = (req, res, next) => {
//   try {
//     const token = req.cookies.token;

//     // If token is missing
//     if (!token) {
//       return res.status(401).json({ message: "Unauthorized: No token provided" });
//     }

//     // Verify token
//     const decoded = jwt.verify(token, process.env.JWT_SECRET);

//     // Attach user info to request
//     req.user = decoded;
//     next();

//   } catch (error) {
//     // Handle specific JWT errors
//     if (error.name === "TokenExpiredError") {
//       return res.status(401).json({ message: "Unauthorized: Token expired" });
//     }

//     if (error.name === "JsonWebTokenError") {
//       return res.status(401).json({ message: "Unauthorized: Invalid token" });
//     }

//     // Other errors
//     console.error("Error in authMiddleware:", error);
//     return res.status(500).json({ message: "Internal Server Error" });
//   }
// };


