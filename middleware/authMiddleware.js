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