import React, { createContext, useContext, useState } from "react";

const TaskContext = createContext(null);

export const useTasks = () => useContext(TaskContext);

export const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);
  const [isFormOpen, setFormOpen] = useState(false);
  const [editingTask, setEditingTask] = useState(null);

  const openForm = () => {
    setEditingTask(null);
    setFormOpen(true);
  };

  const closeForm = () => setFormOpen(false);

  const saveTask = (task) => {
    setTasks((prev) =>
      editingTask
        ? prev.map((t) => (t.id === task.id ? task : t))
        : [...prev, task]
    );
    setFormOpen(false);
  };

  const deleteTask = (id) => {
    setTasks((prev) => prev.filter((t) => t.id !== id));
  };

  const editTask = (task) => {
    setEditingTask(task);
    setFormOpen(true);
  };

  return (
    <TaskContext.Provider
      value={{
        tasks,
        isFormOpen,
        editingTask,
        openForm,
        closeForm,
        saveTask,
        deleteTask,
        editTask,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
};
