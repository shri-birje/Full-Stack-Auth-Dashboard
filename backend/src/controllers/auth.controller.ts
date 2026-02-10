import { Request, Response } from "express";
import jwt, { SignOptions } from "jsonwebtoken";
import { User } from "../models/User.model";
import { hashPassword, comparePassword } from "../utils/hash";
import { env } from "../config/env";


export const register = async (req: Request, res: Response) => {
  const { name, email, password } = req.body;

  const existingUser = await User.findOne({ email });
  if (existingUser) {
    return res.status(400).json({ message: "User already exists" });
  }

  const hashedPassword = await hashPassword(password);
  const user = await User.create({
    name,
    email,
    password: hashedPassword
  });

  res.status(201).json({ message: "User registered successfully" });
};

export const login = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });
  if (!user) {
    return res.status(400).json({ message: "Invalid credentials" });
  }

  const isMatch = await comparePassword(password, user.password);
  if (!isMatch) {
    return res.status(400).json({ message: "Invalid credentials" });
  }

  const signOptions: SignOptions = {
  expiresIn: env.JWT_EXPIRES_IN as SignOptions["expiresIn"]
};

const token = jwt.sign(
  { id: user._id.toString() },
  env.JWT_SECRET,
  signOptions
);


  res.json({
    token,
    user: {
      id: user._id,
      name: user.name,
      email: user.email
    }
  });
};
