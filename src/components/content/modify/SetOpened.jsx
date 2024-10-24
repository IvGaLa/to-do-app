import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import { tasks } from "@config/tableTasks";
import { Tasks } from "@models/Tasks";
import { configData } from "@config/config";

import SetOpenedOk from "@components/content/modify/SetOpenedOk";
import SetOpenedError from "@components/content/modify/SetOpenedError";

// Marcamos como abierta una tarea asignando null a finishedAt.
function SetOpened() {
  const routeList = configData.routes.list;
  const navigate = useNavigate();

  const backToList = () => {
    return navigate(routeList.path);
  };

  const [isOpened, setIsOpened] = useState(false);

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

  const taskToOpen = async () => {
    const response = await Tasks.setOpened(idToOpen);
    response.rowsAffected === 1 ? setIsOpened(true) : setIsOpened(false);
  };

  return (
    <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg shadow-lg p-6 w-80 text-center">
        {isOpened ? (
          <SetOpenedOk backToList={backToList} />
        ) : (
          <SetOpenedError backToList={backToList} />
        )}
      </div>
    </div>
  );
}

export default SetOpened;
