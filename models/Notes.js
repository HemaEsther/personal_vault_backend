import mongoose from "mongoose";

const notesSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    content:{
        type:String
    },
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    isBookmarked:{
        type: Boolean,
        default: false
    }
}, { timestamps: true })

const Note = mongoose.model("Note",notesSchema);
export default Note;