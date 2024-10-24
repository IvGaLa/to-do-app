import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import { tasks } from "@config/tableTasks";
import { Tasks } from "@models/Tasks";
import { configData } from "@config/config";

import SetFinishedOk from "@components/content/modify/SetFinishedOk";
import SetFinishedError from "@components/content/modify/SetFinishedError";

// Marcamos como finalizada una tarea asignando una fecha en finishedAt.
function SetFinished() {
  const routeList = configData.routes.list;
  const navigate = useNavigate();

  const [isFinished, setIsFinished] = useState(false);

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

  const taskToFinish = async () => {
    const response = await Tasks.setFinished(idToFinish);
    response.rowsAffected === 1 ? setIsFinished(true) : setIsFinished(false);
  };

  const backToList = () => {
    return navigate(routeList.path);
  };

  return (
    <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg shadow-lg p-6 w-80 text-center">
        {isFinished ? (
          <SetFinishedOk backToList={backToList} />
        ) : (
          <SetFinishedError backToList={backToList} />
        )}
      </div>
    </div>
  );
}

export default SetFinished;
