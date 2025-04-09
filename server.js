import express from "express"
import dotenv from "dotenv"
import { connectDB } from "./config/connectDB.js";
import cookieParser from "cookie-parser";


dotenv.config();
const app = express();

app.use(express.json());
app.use(cookieParser());

const PORT = 3002;

// Routes
import authRoutes from "./routes/authRoutes.js";
import notesRoutes from "./routes/notesRoutes.js";
app.use('/api/auth', authRoutes);// authentication
app.use('/api/auth', notesRoutes);// authorization koi bhi kaam jo sirf authenticated banda kr ske

connectDB();
app.listen(PORT,()=>{
    console.log(`PORT IS RUNNING ${PORT}`)
    
})


