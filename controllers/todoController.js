import Todo from "../models/Todo.js";

export const createTodo = async (req,res) => {
    const {task , dueDate} = req.body;
    const user = req.user.id;
    try {
        if (!task || !dueDate) {
            return res.status(400).json({ message: "Task and due date are required." });
        }

        const newTodo = new Todo({task, dueDate, user});
        await newTodo.save();

        res.status(201).json({message:"Todo successfully created!"});
    } catch (err) {
        console.error("Error in createTodo:", err.message);
        res.status(500).json({message:"Error in createTodo",error: err.message});
    }
};

export const getTodos = async (req,res) => {
    try {
        const todos = await Todo.find({user:req.user.id});
        res.status(200).json(todos);
    } catch (err) {
        res.status(500).json({message:"Error in getTodos",error:err.message});
    }
};

export const updateTodo = async (req,res) => {
    const { id } = req.params;
    const { task, isCompleted, dueDate } = req.body;
    try {
        const updated = await Todo.findByIdAndUpdate(id,{task,isCompleted,dueDate},{new:true});
        res.status(200).json({ message: "Todo updated", todo: updated });
    } catch (err) {
        res.status(500).json({message:"Error in updateTodo",error:err.message});
    }
};

export const deleteTodo = async (req,res) => {
    const { id } = req.params;
    try {
        const deleted = await Todo.findByIdAndDelete(id);
        res.status(200).json({ message: "Todo deleted" });
    } catch (error) {
        res.status(500).json({message:"Error in deleteTodo",error});
    }
};