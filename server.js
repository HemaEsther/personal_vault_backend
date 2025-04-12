import express from "express"
import dotenv from "dotenv"
import { connectDB } from "./config/connectDB.js";
import cookieParser from "cookie-parser";
import cors from 'cors';

dotenv.config();
const app = express();

app.use(cors({
    origin: "http://localhost:5173", // only allow this origin
    credentials: true // if you're using cookies, sessions, etc.
  }));
app.use(express.json());
app.use(cookieParser());

const PORT = 3002;

// Routes
import authRoutes from "./routes/authRoutes.js";
import notesRoutes from "./routes/notesRoutes.js";
import todoRoutes from "./routes/todoRoutes.js";
app.use('/api/auth', authRoutes);// authentication
app.use('/api/notes', notesRoutes);// authorization koi bhi kaam jo sirf authenticated banda kr ske
app.use('/api/todos', todoRoutes);


connectDB();
app.listen(PORT,()=>{
    console.log(`PORT IS RUNNING ${PORT}`)     
})


