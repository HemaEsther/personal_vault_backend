import express from "express";
import {
  createNotes,
  deleteNote,
  getNotes,
  updateNote,
} from "../controllers/notesController.js";
import { authMiddleware } from "../middleware/authMiddleware.js";
const router = express.Router();

router.post("/createnotes", authMiddleware, createNotes);
router.get("/getnotes", authMiddleware, getNotes);
router.put("/updatenote/:id", authMiddleware, updateNote);
router.delete("/deletenote/:id", authMiddleware, deleteNote);

export default router;
