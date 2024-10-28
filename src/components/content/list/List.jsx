/**
 * Componente para el listado de las tareas.
 * Gestiona un estado de carga de los datos y si existen tareas, las lista.
 */

import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { Tasks } from "@models/Tasks";
import { getLocale } from "@locales/es";
import TitlePage from "@components/TitlePage";
import { configData } from "@config/config";

import TaskCard from "@components/content/list/TaskCard";
import Loading from "@components/Loading";

function List() {
  /**
   *
   * Estados de carga y el listado de tareas
   *
   */
  const [tasks, setTasks] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  /**
   *
   * Recuperamos el userid del localstorage, si no existiese, mostrará un mensaje de no hay tareas.
   *
   */
  const userid = localStorage.getItem(getLocale("localstorage.userid"));

  const { routes } = configData;

  /**
   *
   * Si ya tenemos tareas, dejamos de mostrar el Loading
   *
   */
  useEffect(() => {
    if (tasks === null) {
      getTasks();
    } else {
      setIsLoading(false);
    }
  }, [tasks]);

  /**
   *
   * Recuperamos las tareas
   *
   */
  const getTasks = async () => {
    const rows = await Tasks.getAllByUserId(userid);
    setTasks(rows);
  };

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
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
      )}
    </>
  );
}

export default List;
