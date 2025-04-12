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

    res.status(201).json({ message: "User created successfully", user: newuser });

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
    res.cookie('token', token, {
      httpOnly: true,
      secure:false,
      sameSite: 'Lax',   // for local dev only
      maxAge: 24 * 60 * 60 * 1000,
    });
    
    

    res.status(201).json({ message: "User logged in successfully" });
  } catch (error) {
    res
      .status(400)
      .json({ message: "Something went wrong in login controller" });
  }
};

export const logout = async (req, res) => {
  try {
    // Clear the cookie by setting its expiration to a past date
    console.log(req.cookies)
    res.clearCookie('token', {
      httpOnly: true,
      secure: false, // set to true in production (with HTTPS)
      sameSite: 'Lax',
    });

    res.status(200).json({ message: "User logged out successfully" });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong in logout controller" });
  }
};


// verify token from cookie
export const verifyUser = (req, res) => {
  const token = req.cookies.token;

  if (!token) return res.status(401).json({ message: "No token provided" });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    return res.status(200).json({ message: "Authenticated", user: decoded });
  } catch (error) {
    return res.status(403).json({ message: "Invalid token" });
  }
};

