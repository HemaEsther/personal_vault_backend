import express from "express";
import {
  createNotes,
  deleteNote,
  getNotes,
  toggleBookmark,
  updateNote,
} from "../controllers/notesController.js";
import { authMiddleware } from "../middleware/authMiddleware.js";
const router = express.Router();

router.post("/create", authMiddleware, createNotes);
router.get("/get", authMiddleware, getNotes);
router.put("/update/:id", authMiddleware, updateNote);
router.delete("/delete/:id", authMiddleware, deleteNote);
router.patch('/notes/:id/bookmark', authMiddleware, toggleBookmark);


export default router;
