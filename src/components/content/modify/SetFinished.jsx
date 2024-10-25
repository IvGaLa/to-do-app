import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import { tasks } from "@config/tableTasks";
import { Tasks } from "@models/Tasks";
import { configData } from "@config/config";
import { getLocale } from "@locales/es";

import Loading from "@components/Loading";
import SetMessage from "@components/content/modify/SetMessage";

// Marcamos como finalizada una tarea asignando una fecha en finishedAt.
function SetFinished() {
  const routeList = configData.routes.list;
  const navigate = useNavigate();

  const [isFinished, setIsFinished] = useState(false);
  const [response, setResponse] = useState(null);

  const [isLoading, setIsLoading] = useState(true);

  const { id } = useParams();

  // Solo mantenemos la clave 'id' con su estructura y modificamos 'value'
  const { id: idToFinish } = {
    id: {
      ...tasks.fields.id, // Mantiene la estructura completa de 'id'
      value: id, // Modifica el valor de 'id.value'
    },
  };

  useEffect(() => {
    taskToFinish();
  }, []);

  useEffect(() => {
    if (response !== null) {
      setIsLoading(false);
      response.rowsAffected === 1 ? setIsFinished(true) : setIsFinished(false);
    }
  }, [response]);

  const taskToFinish = async () => {
    const res = await Tasks.setFinished(idToFinish);
    setResponse(res);
  };

  const backToList = () => {
    return navigate(routeList.path);
  };

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50">
          <div className="bg-white rounded-lg shadow-lg p-6 w-80 text-center">
            {isFinished ? (
              <SetMessage backToList={backToList} color="green">
                {getLocale("components.content.modify.finished")}
              </SetMessage>
            ) : (
              <SetMessage backToList={backToList} color="red">
                {getLocale("components.content.modify.finishedError")}
              </SetMessage>
            )}
          </div>
        </div>
      )}
    </>
  );
}

export default SetFinished;
