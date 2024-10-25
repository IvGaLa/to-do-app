import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import { tasks } from "@config/tableTasks";
import { Tasks } from "@models/Tasks";
import { configData } from "@config/config";
import { getLocale } from "@locales/es";

import Loading from "@components/Loading";
import SetMessage from "@components/content/modify/SetMessage";

// Marcamos como abierta una tarea asignando null a finishedAt.
function SetOpened() {
  const routeList = configData.routes.list;
  const navigate = useNavigate();

  const backToList = () => {
    return navigate(routeList.path);
  };

  const [isOpened, setIsOpened] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [response, setResponse] = useState(null);

  const { id } = useParams();

  // Solo mantenemos la clave 'id' con su estructura y modificamos 'value'
  const { id: idToOpen } = {
    id: {
      ...tasks.fields.id, // Mantiene la estructura completa de 'id'
      value: id, // Modifica el valor de 'id.value'
    },
  };

  useEffect(() => {
    taskToOpen();
  }, []);

  useEffect(() => {
    if (response !== null) {
      setIsLoading(false);

      response.rowsAffected === 1 ? setIsOpened(true) : setIsOpened(false);
    }
  }, [response]);

  const taskToOpen = async () => {
    const res = await Tasks.setOpened(idToOpen);
    setResponse(res);
  };

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50">
          <div className="bg-white rounded-lg shadow-lg p-6 w-80 text-center">
            {isOpened ? (
              <SetMessage backToList={backToList} color="green">
                {getLocale("components.content.modify.opened")}
              </SetMessage>
            ) : (
              <SetMessage backToList={backToList} color="red">
                {getLocale("components.content.modify.openedError")}
              </SetMessage>
            )}
          </div>
        </div>
      )}
    </>
  );
}

export default SetOpened;
