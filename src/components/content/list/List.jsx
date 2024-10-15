import { useState, useEffect } from "react";
import { Tasks } from "../../../models/Tasks";
import Task from "./Task";
import { Link } from "react-router-dom";
import { getLocale } from "../../../locale/es";

function List() {
  const [tasks, setTasks] = useState([]);

  const tasksModel = new Tasks();

  useEffect(() => {
    getTasks();
  }, []);

  const getTasks = async () => {
    const rows = await tasksModel.getAll();
    setTasks(rows);
  };

  return (
    <div>
      <h2>{getLocale("pages.list.title")}</h2>
      {tasks.length !== 0 ? (
        <Task tasks={tasks} setTasks={setTasks} />
      ) : (
        <div>
          <p>{getLocale("pages.list.withouttasks")}</p>
          <p>
            {getLocale("pages.list.click")}{" "}
            <Link to="/add">{getLocale("pages.list.here")}</Link>{" "}
            {getLocale("pages.list.addnewtask")}
          </p>
        </div>
      )}
    </div>
  );
}

export default List;
