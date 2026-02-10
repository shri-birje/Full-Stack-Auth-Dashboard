import { Response } from "express";
import { AuthRequest } from "../middleware/auth.middleware";
import { User } from "../models/User.model";

export const getProfile = async (req: AuthRequest, res: Response) => {
  const user = await User.findById(req.userId).select("-password");
  res.json(user);
};
