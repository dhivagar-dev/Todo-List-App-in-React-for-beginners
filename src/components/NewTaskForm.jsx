import { useEffect, useState } from "react";
import { useTasks } from "../context/TaskContext";

const NewTaskForm = () => {
  const { saveTask, closeForm, editingTask } = useTasks();

  const [taskName, setTaskName] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [date, setDate] = useState("");
  const [priority, setPriority] = useState("");

  useEffect(() => {
    if (editingTask) {
      setTaskName(editingTask.title);
      setDescription(editingTask.description);
      setCategory(editingTask.category);
      setDate(editingTask.date);
      setPriority(editingTask.priority);
    }
  }, [editingTask]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newTask = {
      id: editingTask ? editingTask.id : Date.now(),
      title: taskName,
      description,
      category,
      date,
      priority,
      status: editingTask ? editingTask.status : "To-do",
    };

    saveTask(newTask);
    closeForm();
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center">
      <div className="bg-white rounded-lg shadow-lg p-6 w-[400px]">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">
            {editingTask ? "Edit Task" : "Add New Task"}
          </h2>
          <button
            onClick={closeForm}
            className="text-gray-500 hover:text-gray-800"
          >
            ✕
          </button>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          <input
            type="text"
            placeholder="Task name"
            className="border rounded p-2"
            value={taskName}
            onChange={(e) => setTaskName(e.target.value)}
            required
          />
          <textarea
            placeholder="Description"
            className="border rounded p-2"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>

          <select
            className="border rounded p-2"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="">Select category</option>
            <option>Work</option>
            <option>Personal</option>
          </select>

          <input
            type="date"
            className="border rounded p-2"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />

          <select
            className="border rounded p-2"
            value={priority}
            onChange={(e) => setPriority(e.target.value)}
          >
            <option value="">Select priority</option>
            <option value="High">High</option>
            <option value="Medium">Medium</option>
            <option value="Low">Low</option>
          </select>

          <button
            type="submit"
            className="bg-blue-500 text-white rounded p-2 mt-2"
          >
            {editingTask ? "Save Changes" : "Add Task"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default NewTaskForm;
