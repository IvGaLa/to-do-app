import { useState, useEffect } from "react";
import { Tasks } from "../../../models/Tasks";
import Task from "./Task";
import { Link } from "react-router-dom";

function List() {
  const [tasks, setTasks] = useState([]);

  const taskModel = new Tasks();

  useEffect(() => {
    getTasks();
  }, []);

  const getTasks = async () => {
    const rows = await taskModel.getAll();
    setTasks(rows);
  };

  return (
    <>
      {tasks.length != 0 ? (
        <Task tasks={tasks} setTasks={setTasks} />
      ) : (
        <>
          <p>Aún no dispones de tareas creadas.</p>
          <p>
            Hazl click <Link to="/add">aquí</Link> para añadir tu primera tarea.
          </p>
        </>
      )}
    </>
  );
}

export default List;
