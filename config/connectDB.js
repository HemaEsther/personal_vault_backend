import mongoose from "mongoose";

export const connectDB = async() => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("DB conneted!!");
    } catch (error) {
        console.log("Error in DB connection"+error);
        process.exit(1);
    }
}