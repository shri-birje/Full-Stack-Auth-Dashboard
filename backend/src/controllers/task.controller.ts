import { Response } from "express";
import { AuthRequest } from "../middleware/auth.middleware";
import { Task } from "../models/Task.model";

export const createTask = async (req: AuthRequest, res: Response) => {
  const task = await Task.create({
    title: req.body.title,
    user: req.userId
  });
  res.status(201).json(task);
};

export const getTasks = async (req: AuthRequest, res: Response) => {
  const tasks = await Task.find({ user: req.userId });
  res.json(tasks);
};

export const updateTask = async (req: AuthRequest, res: Response) => {
  const task = await Task.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  res.json(task);
};

export const deleteTask = async (req: AuthRequest, res: Response) => {
  await Task.findByIdAndDelete(req.params.id);
  res.json({ message: "Task deleted" });
};
