import jwt from "jsonwebtoken";
import User from "../models/User.js";
import bcrypt from "bcryptjs";

export const signup = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const existinguser = await User.findOne({ email });

    if (existinguser) {
      res.status(400).json({ message: "User already exist" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newuser = new User({ name, email, password: hashedPassword });
    await newuser.save();

    res.status(201).json({ message: "User created successfully" });
  } catch (error) {
    res
      .status(400)
      .json({ message: "Something went wrong in signup controller" });
  }
};

export const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(404).json({ message: "User not found" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch)
      return res.status(400).json({ message: "Invalid credentials" });

    //create JWT
    const token = jwt.sign(
      { id: user._id, email: user.email },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );

    //send jwt in cookies
    res.cookie("token", token, {
      httpOnly: true,
      sameSite: "Strict",
    });

    res.status(201).json({ message: "User logged in successfully" });
  } catch (error) {
    res
      .status(400)
      .json({ message: "Something went wrong in login controller" });
  }
};
