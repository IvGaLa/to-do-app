/**
 *
 * Componente para gestionar la modificación de tareas.
 *
 */

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { getLocale } from "@locales/es";
import { tasks } from "@config/tableTasks";
import { Tasks } from "@models/Tasks";
import { validateForm } from "@validations/tasks";

import TitlePage from "@components/TitlePage";
import Loading from "@components/Loading";
import ErrorMessage from "@components/form/ErrorMessage";
import InfoMessage from "@components/form/InfoMessage";

import ModifyForm from "@components/content/modify/ModifyForm";
import ButtonBackToList from "../../ButtonBackToList";

function Modify() {
  const { id } = useParams();

  /**
   * Solo mantenemos la clave 'id' con su estructura y modificamos 'value'
   */
  const idToEdit = {
    id: {
      ...tasks.fields.id, // Mantiene la estructura completa de 'id'
      value: id, // Modifica el valor de 'id.value'
    },
  };

  /**
   * Estados para la tarea a editar, el componente de carga y los errores de la validación del formulario
   */
  const [taskToEdit, setTaskToEdit] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [errors, setErrors] = useState(null);

  /**
   * Recuperamos la tarea a editar
   */
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

  // Si estamos en estado de carga, mostramos el componente Loading
  if (isLoading) return <Loading />;

  return (
    <>
      {!taskToEdit ? (
        //Si no se ha encontrado la tarea, puede ser por error en el id o por no existir
        <>
          {!errors ? (
            // Si no hay errores es que no existe
            <InfoMessage
              info={getLocale("components.content.modify.taskNotFound")}
            />
          ) : (
            // Si hay error, lo muestro
            <ErrorMessage error={errors.id} />
          )}
          <ButtonBackToList />
        </>
      ) : (
        <div>
          <TitlePage>{getLocale("components.content.modify.title")}</TitlePage>
          <section className="max-w-4xl p-6 mx-auto bg-white rounded-md shadow-md dark:bg-gray-800">
            <ModifyForm task={taskToEdit} />
          </section>
        </div>
      )}
    </>
  );
}

export default Modify;
