import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { getLocale } from "@locales/es";
import { tasks } from "@config/tableTasks";
import { Tasks } from "@models/Tasks";
import { validateForm } from "@validations/tasks";
import { configData } from "@config/config";

import TitlePage from "@components/TitlePage";
import Loading from "@components/Loading";
import ErrorMessage from "@components/form/ErrorMessage";
import InfoMessage from "@components/form/InfoMessage";

import ModifyForm from "@components/content/modify/ModifyForm";

function Modify() {
  const { id } = useParams();

  // Solo mantenemos la clave 'id' con su estructura y modificamos 'value'
  const idToEdit = {
    id: {
      ...tasks.fields.id, // Mantiene la estructura completa de 'id'
      value: id, // Modifica el valor de 'id.value'
    },
  };

  const navigate = useNavigate();

  const [taskToEdit, setTaskToEdit] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [errors, setErrors] = useState(null);

  const getTaskToEdit = async () => {
    // Validamos los datos del id
    const ValidateErrors = validateForm(idToEdit);

    // Si hay errores, asignamos el error y terminamos el estado de "cargando"
    if (Object.keys(ValidateErrors).length > 0) {
      setIsLoading(false);
      setErrors(ValidateErrors);
      return;
    }

    const taskEdit = await Tasks.getById(idToEdit[idToEdit.id.name].value);

    setTaskToEdit(taskEdit);
  };

  useEffect(() => {
    taskToEdit === null ? getTaskToEdit() : setIsLoading(false);
  }, [taskToEdit]);

  const handlerBackToList = () => {
    const routeList = configData.routes.list.path;
    return navigate(routeList);
  };

  return (
    <>
      {isLoading ? (
        // Mostramos el componente "Loading"
        <Loading />
      ) : (
        <>
          {!taskToEdit ? (
            //Si no se ha encontrado la tarea, puede ser por error en el id o por no existir
            <>
              {!errors ? (
                // Si no hay errores es que no existe
                <div>
                  <InfoMessage
                    info={getLocale("components.content.modify.taskNotFound")}
                  />
                </div>
              ) : (
                // Si hay error, lo muestro
                <div>
                  <ErrorMessage error={errors.id} />
                </div>
              )}
              <button
                className="px-4 py-2 bg-gray-600 hover:bg-gray-700 text-white font-semibold rounded-md"
                onClick={handlerBackToList}
              >
                {getLocale("components.content.modify.backToList")}
              </button>
            </>
          ) : (
            <div>
              <TitlePage>
                {getLocale("components.content.modify.title")}
              </TitlePage>
              <section className="max-w-4xl p-6 mx-auto bg-white rounded-md shadow-md dark:bg-gray-800">
                <ModifyForm task={taskToEdit} />
              </section>
            </div>
          )}
        </>
      )}
    </>
  );
}

export default Modify;
