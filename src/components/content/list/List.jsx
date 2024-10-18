import { useState, useEffect } from "react";
import { Tasks } from "../../../models/Tasks";
import Task from "./Task";
import { Link } from "react-router-dom";
import { getLocale } from "../../../locale/es";
import TitlePage from "../../TitlePage";
import { configData } from "../../../config/config";

function List() {
  const [tasks, setTasks] = useState([]);

  const userid = localStorage.getItem(getLocale("localstorage.userid"));

  const { routes } = configData;

  useEffect(() => {
    getTasks();
  }, []);

  const getTasks = async () => {
    const rows = await Tasks.getAllByUserId(userid);
    setTasks(rows);
  };

  return (
    <div>
      <TitlePage>{getLocale("components.content.list.title")}</TitlePage>
      {tasks.length !== 0 ? (
        <div className="border border-gray-200 p-3 shadow-md">
          <Task tasks={tasks} setTasks={setTasks} />
        </div>
      ) : (
        <div>
          <p>{getLocale("components.content.list.withouttasks")}</p>
          <p>
            {getLocale("components.content.list.click")}{" "}
            <Link to={routes.add.path}>
              {getLocale("components.content.list.here")}
            </Link>{" "}
            {getLocale("components.content.list.addnewtask")}
          </p>
        </div>
      )}
    </div>
  );
}

export default List;
