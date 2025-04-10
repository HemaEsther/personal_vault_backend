import mongoose from "mongoose";

const todoschema = new mongoose.Schema({
    task:{
        type:String,
        required:true
    },
    isCompleted:{
        type:Boolean,
        default:false
    },
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true
    },
    dueDate: {
        type: Date
    }
},{timestamps:true});

const Todo = mongoose.model("Todo",todoschema);

export default Todo;