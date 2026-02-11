"use client";

import { useEffect, useState } from "react";
import api from "@/lib/api";

export default function TasksPage() {
  const [tasks, setTasks] = useState<any[]>([]);
  const [title, setTitle] = useState("");
  const [query, setQuery] = useState("");

  const loadTasks = async () => {
    const res = await api.get("/tasks");
    setTasks(res.data);
  };

  useEffect(() => {
    loadTasks();
  }, []);

  const addTask = async () => {
    if (!title.trim()) {
      alert("Task title is required");
      return;
    }

    await api.post("/tasks", { title });
    setTitle("");
    loadTasks();
  };

  const deleteTask = async (id: string) => {
    await api.delete(`/tasks/${id}`);
    loadTasks();
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Tasks</h1>

      <div className="flex gap-2 mb-4">
        <input className="border p-2" value={title} onChange={(e) => setTitle(e.target.value)} />
        <button onClick={addTask} className="bg-black text-white px-4">Add</button>
      </div>

      <input
        className="border p-2 mb-4 w-full"
        placeholder="Search tasks..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />

      <ul className="space-y-2">
        {tasks
          .filter((task) => task.title.toLowerCase().includes(query.toLowerCase()))
          .map((task) => (
            <li key={task._id} className="flex justify-between border p-2">
              {task.title}
              <button onClick={() => deleteTask(task._id)}>❌</button>
            </li>
          ))}
      </ul>
    </div>
  );
}
