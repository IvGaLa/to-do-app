/**
 *
 * Componente en el que se muestra un pequeño menú para gestionar la ordenación de las tareas.
 *
 */

import { useState } from "react";
import { GrLinkDown, GrLinkUp } from "react-icons/gr";

import { tasks as tasksFields } from "@config/tableTasks";
import { sortBy, sortType } from "@lib/sorting";

function SpanOrders({ tasks, setTasks }) {
  /**
   *
   * Hace una llamada de ordenación de las tareas listadas
   *
   */
  const handlerSorting = (orderBy) => {
    setTasks(sortBy({ tasks, orderBy, sortOrder, setSortOrder }));
  };

  /**
   *
   * Guarda el estado de ordenación (ASC/DESC) de la columna seleccionada.
   *
   */
  const [sortOrder, setSortOrder] = useState(sortType);

  /**
   *
   * Guardamos las columnas por las que queremos ordenar las tareas
   *
   */
  const columns = [
    tasksFields.fields[tasksFields.fields.title.name],
    tasksFields.fields[tasksFields.fields.description.name],
    tasksFields.fields[tasksFields.fields.createdAt.name],
    tasksFields.fields[tasksFields.fields.modifiedAt.name],
    tasksFields.fields[tasksFields.fields.finishedAt.name],
  ];

  return (
    <div className="flex justify-center">
      <ul className="sm:flex hidden items-center gap-4">
        {columns.map((column, index) => (
          <li
            key={index}
            className="m-3 cursor-pointer select-none"
            onClick={() => handlerSorting(column.name)}
          >
            {column.label}
            {sortOrder[column.name] === 1 ? (
              <GrLinkUp className="inline mx-1" />
            ) : (
              <GrLinkDown className="inline mx-1" />
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SpanOrders;
