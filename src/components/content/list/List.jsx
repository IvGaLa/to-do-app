import { useState, useEffect } from "react";
import { Tasks } from "../../../models/Tasks";
import Task from "./Task";

function List() {
  const [tasks, setTasks] = useState([]);

  const taskModel = new Tasks();

  useEffect(() => {
    getTasks();
  }, []);

  const getTasks = async () => {
    taskModel.getAll(setTasks);
  };

  return (
    <>{tasks.length != 0 ? <Task tasks={tasks} setTasks={setTasks} /> : null}</>
  );
}

export default List;
