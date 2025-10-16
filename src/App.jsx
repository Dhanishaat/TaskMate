import { useEffect, useState } from "react";
import ProgressTracker from "./Components/ProgressTracker";
import Taskform from "./Components/Taskform";
import TaskList from "./Components/TaskList";

export default function App() {
  const[tasks, setTasks] = useState([]);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks))
  });
  const addTask = (task) => {
  setTasks([...tasks, task]);
  }
  return(
    <div>
      
      <h1>Task Mate</h1>
      <p>Our friendly task manager</p>
      <Taskform addTask = {addTask}/>
      <TaskList />
      <ProgressTracker />

      <button>Clear all tasks</button>
    </div>
  )
}