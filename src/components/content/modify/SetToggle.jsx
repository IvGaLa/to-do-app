import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import { tasks } from "@config/tableTasks";
import { Tasks } from "@models/Tasks";
import { configData } from "@config/config";
import { getLocale } from "@locales/es";

import Loading from "@components/Loading";
import SetMessage from "@components/content/modify/SetMessage";

// Marcamos como finalizada una tarea asignando una fecha en finishedAt.
function SetToggle() {
  const routeList = configData.routes.list;
  const navigate = useNavigate();

  const [isToggle, setIsToggle] = useState(false);
  const [response, setResponse] = useState(null);

  const [isLoading, setIsLoading] = useState(true);

  // Si es 0 lo pongo a null si es 1 le pongo la fecha actual
  const { id, state: stateParam } = useParams();
  const state = parseInt(stateParam);

  // Solo mantenemos la clave 'id' con su estructura y modificamos 'value'
  const { id: idToToggle } = {
    id: {
      ...tasks.fields.id, // Mantiene la estructura completa de 'id'
      value: id, // Modifica el valor de 'id.value'
    },
  };

  useEffect(() => {
    taskToToggle();
  }, []);

  useEffect(() => {
    if (response !== null) {
      setIsLoading(false);
      response.rowsAffected === 1 ? setIsToggle(true) : setIsToggle(false);
    }
  }, [response]);

  const taskToToggle = async () => {
    const res = await Tasks.setToggle(idToToggle, parseInt(state));
    setResponse(res);
  };

  const backToList = () => {
    return navigate(routeList.path);
  };

  // Establecemos los estados para el mensaje de estado de la operación
  const isFinished = state ? "toggleFinished" : "toggleOpened";
  const isError = isToggle ? "" : "Error";
  const color = isToggle ? "green" : "red";

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50">
          <div className="bg-white rounded-lg shadow-lg p-6 w-80 text-center">
            <SetMessage backToList={backToList} color={color}>
              {getLocale(`components.content.modify.${isFinished}${isError}`)}
            </SetMessage>
          </div>
        </div>
      )}
    </>
  );
}

export default SetToggle;
