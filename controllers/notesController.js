import Note from "../models/Notes.js";


export const createNotes = async (req,res) => {
    try {
        const {title,content} = req.body;
        const userId = req.user.id;

    if(!title){
        res.status(400).json({message:"Needing title"});
    }
    if(!content){
        res.status(400).json({message:"Content is missing"});
    }

    const newNote = new Note({title,content,user:userId});
    await newNote.save();
    
    res.status(200).json({message:"Notes created successfully"});
    } catch (error) {
        res.status(500).json({ message: "Error creating note", error });
    }
    
};

export const getNotes = async (req,res) => {
    try {
    const userId = req.user.id;
    const notes = await Note.find({ user: userId });

    res.status(200).json(notes);
    } catch (error) {
        res.status(500).json({ message: "Error creating note", error });
    }
};

export const updateNote = async (req, res) => {
    const { id } = req.params;
    const { title, content } = req.body;
  
    try {
      const updatedNote = await Note.findOneAndUpdate(
        { _id: id, user: req.user.id },
        { title, content },
        { new: true }
      );
  
      if (!updatedNote) {
        return res.status(404).json({ message: "Note not found or unauthorized" });
      }
  
      res.status(200).json({ message: "Note updated successfully"});
    } catch (error) {
      res.status(500).json({ message: "Error updating note", error });
    }
  };

export const deleteNote = async(req,res) => {
    const {id} = req.params;
    try {
        const deletedNote = await Note.findOneAndDelete({_id: id, user: req.user.id});
        if(!deletedNote){
            return res.status(404).json({ message: "Note not found" });
        }
        res.status(200).json({ message: "Note deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: "Error deleting note", error });
    }
};

export const toggleBookmark = async (req, res) => {
    const { id } = req.params;
  
    try {
      const note = await Note.findOne({ _id: id, user: req.user.id });
  
      if (!note) {
        return res.status(404).json({ message: "Note not found" });
      }
  
      note.isBookmarked = !note.isBookmarked;
      await note.save();
  
      res.status(200).json({ message: "Bookmark status updated", isBookmarked: note.isBookmarked });
    } catch (error) {
      res.status(500).json({ message: "Error toggling bookmark", error });
    }
  };
  