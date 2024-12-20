/**
 *
 * Componente para mostrar la tarea a eliminar o un mensaje de error si la tarea no se encuentra.
 *
 */

import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import TitlePage from "@components/TitlePage";
import { getLocale } from "@locales/es";
import { Tasks } from "@models/Tasks";
import { tasks } from "@config/tableTasks";
import { validateForm } from "@validations/tasks";

import ConfirmDelete from "@components/content/delete/ConfirmDelete";

function Delete() {
  const { id } = useParams();

  // Solo mantenemos la clave 'id' con su estructura y modificamos 'value'
  const idToDelete = {
    id: {
      ...tasks.fields.id, // Mantiene la estructura completa de 'id'
      value: id, // Modifica el valor de 'id.value'
    },
  };

  const [taskToDelete, setTaskToDelete] = useState();

  useEffect(() => {
    getTaskToDelete();
  }, []);

  /**
   *
   * Recuperamos la tarea a eliminar o mostramos mensaje de error si no la encontramos o el id no es válido
   *
   */
  const getTaskToDelete = async () => {
    // Validamos los datos del id
    const errors = validateForm(idToDelete);

    // Si hay errores, salimos... terminará mostrando que no se ha encontrado el registro.
    if (Object.keys(errors).length > 0) return;

    const taskDelete = await Tasks.getById(
      idToDelete[idToDelete.id.name].value
    );

    setTaskToDelete(taskDelete);
  };

  return (
    <div>
      <TitlePage>{getLocale("components.content.delete.title")}</TitlePage>
      {taskToDelete ? (
        <ConfirmDelete task={taskToDelete} />
      ) : (
        <p>
          {getLocale("components.content.delete.taskNotFound")} {id}
        </p>
      )}
    </div>
  );
}

export default Delete;
