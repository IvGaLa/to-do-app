import { useEffect, useState } from "react";
import { Tasks } from "./models/Tasks";

function App() {
  const [tasks, setTasks] = useState([]);

  const taskstable = new Tasks();

  useEffect(() => {
    getTasks();
  }, []);

  const getTasks = async () => {
    taskstable.getAll(setTasks);
  };

  return (
    <>
      {tasks.length != 0
        ? tasks.map((task) => <p key={task.id}>task: {task.title}</p>)
        : "sin tareas"}
    </>
  );
}

export default App;
