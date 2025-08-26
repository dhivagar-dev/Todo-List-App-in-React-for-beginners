import "./App.css";
import Header from "./Header/Header";
import ButtonGroup from "./Button/ButtonGroup";
import TableLayout from "./TaskTable/TableLayout";
import NewTaskForm from "./components/NewTaskForm";
import { useTasks } from "./context/TaskContext";

function App() {
  const { isFormOpen, openForm } = useTasks();

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="container rounded-xl bg-white bg-opacity-50 max-w-4xl h-[600px]">
        <Header />
        <ButtonGroup onAddTaskClick={openForm} />

        <TableLayout />

        {isFormOpen && <NewTaskForm />}
      </div>
    </div>
  );
}

export default App;
