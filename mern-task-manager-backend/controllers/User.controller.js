const userModel = require("../models/user.model");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

const registerUser = async (req, res) => {
  const { name, email, password, role } = req.body;
  try {
    if (!name || !email || !password || !role) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const emailCheck = await userModel.findOne({ email });

    if (emailCheck) {
      return res.status(400).json({ message: "User account already exists" });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new userModel({
      name,
      email,
      password: hashedPassword,
      role,
    });
    await newUser.save();
    res.status(201).json({ message: "New user added" });
  } catch (err) {
    res.status(500).json({ message: "User not added" });
  }
};

const loginUser = async (req, res) => {
  const { email, password } = req.body;
try{
  const user = await userModel.findOne({ email });
  if (!user) {
    return res
      .status(404)
      .json({ message: "User account not found ,Please register" });
  }

  const passwordMatch = await bcrypt.compare(password, user.password);
  if (!passwordMatch) {
    return res.status(401).json({ message: "Password Mismatch" });
  }
  // JWT Generation
  const token = jwt.sign(
    { userId: user._id, name: user.name, email: user.email, role: user.role },
    process.env.secret_key,
    { expiresIn: "24h" }
  );
   return res.status(200).json({
      message: "Login successful",
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
      },
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Login failed" });
  }

};

module.exports = { registerUser, loginUser };
