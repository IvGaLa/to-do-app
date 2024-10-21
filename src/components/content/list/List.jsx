import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { Tasks } from "@models/Tasks";
import { getLocale } from "@locales/es";
import TitlePage from "@components/TitlePage";
import { configData } from "@config/config";

import TaskCard from "@components/content/list/TaskCard";

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
        <TaskCard tasks={tasks} setTasks={setTasks} />
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
