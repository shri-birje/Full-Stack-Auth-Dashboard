import { Task } from "../models/Task.model";

export const createTaskService = async (
  title: string,
  userId: string
) => {
  return Task.create({ title, user: userId });
};

export const getTasksService = async (userId: string) => {
  return Task.find({ user: userId }).sort({ createdAt: -1 });
};

export const updateTaskService = async (
  taskId: string,
  data: any
) => {
  return Task.findByIdAndUpdate(taskId, data, { new: true });
};

export const deleteTaskService = async (taskId: string) => {
  return Task.findByIdAndDelete(taskId);
};
