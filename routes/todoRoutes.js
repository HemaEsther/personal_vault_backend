
import express from "express"
import { authMiddleware } from "../middleware/authMiddleware.js";
import { createTodo, deleteTodo, getTodos, updateTodo } from "../controllers/todoController.js";
const router = express.Router();

router.post("/create", authMiddleware, createTodo);
router.get("/get", authMiddleware, getTodos);
router.put("/update/:id", authMiddleware, updateTodo);
router.delete("/delete/:id", authMiddleware, deleteTodo);

export default router;