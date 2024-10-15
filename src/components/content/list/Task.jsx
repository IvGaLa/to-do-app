import { useState } from "react";
import { sortBy, sortType } from "../../../lib/sorting";
import Th from "./Th";
import { GrTrash, GrEdit } from "react-icons/gr";
import { tasks as tasksFields } from "../../../config/tableTasks";

function Task({ tasks, setTasks }) {
  const handlerSorting = (orderBy) => {
    setTasks(sortBy({ tasks, orderBy, sortOrder, setSortOrder }));
  };

  const [sortOrder, setSortOrder] = useState(sortType);

  const columns = [
    "title",
    "description",
    "createdAt",
    "modifiedAt",
    "finishedAt",
  ].map((field) => tasksFields.fields[field]);

  //const { id, user } = tasksFields.fields;

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
        <thead>
          <tr>
            {columns.map((column, index) => (
              <Th
                key={index}
                handlerSorting={handlerSorting}
                sortOrder={sortOrder}
                sortBy={column.name}
              >
                {column.label}
              </Th>
            ))}
            <th></th>
          </tr>
        </thead>

        <tbody className="divide-y divide-gray-200">
          {tasks.map((task) => (
            <tr
              key={`${task.user}-${task.id}`}
              className={`${task.finished ? "bg-green-300" : "bg-red-300"}`}
            >
              <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                {task.title}
              </td>
              <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                {task.description}
              </td>
              <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                {task.createdAt}
              </td>
              <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                {task.modifiedAt}
              </td>
              <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                {task.finishedAt}
              </td>
              <td>
                <GrEdit />
              </td>
              <td>
                <GrTrash />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Task;

/*
Como puedo mejorar estos dos componentes?
Por un lado tengo el componente Task.jsx con el siguiente contenido:

import { useState } from "react";
import { sortBy, sortType } from "../../../lib/sorting";
import Th from "./Th";
import { GrTrash, GrEdit } from "react-icons/gr";

function Task({ tasks, setTasks }) {
  const handlerSorting = (orderBy) => {
    setTasks(sortBy({ tasks, orderBy, sortOrder, setSortOrder }));
  };

  const [sortOrder, setSortOrder] = useState(sortType);

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
        <thead>
          <tr>
            <Th
              handlerSorting={handlerSorting}
              sortOrder={sortOrder}
              sortBy="title"
            >
              Título
            </Th>
            <Th
              handlerSorting={handlerSorting}
              sortOrder={sortOrder}
              sortBy="description"
            >
              Descripción
            </Th>
            <Th
              handlerSorting={handlerSorting}
              sortOrder={sortOrder}
              sortBy="createdAt"
            >
              Creada
            </Th>
            <Th
              handlerSorting={handlerSorting}
              sortOrder={sortOrder}
              sortBy="modifiedAt"
            >
              Modificada
            </Th>
            <Th
              handlerSorting={handlerSorting}
              sortOrder={sortOrder}
              sortBy="finishedAt"
            >
              Finalizada
            </Th>
            <Th></Th>
          </tr>
        </thead>

        <tbody className="divide-y divide-gray-200">
          {tasks.map((task) => (
            <tr
              key={`${task.user}-${task.id}`}
              className={`${task.finished ? "bg-green-300" : "bg-red-300"}`}
            >
              <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                {task.title}
              </td>
              <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                {task.description}
              </td>
              <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                {task.createdAt}
              </td>
              <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                {task.modifiedAt}
              </td>
              <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                {task.finishedAt}
              </td>
              <td>
                <GrEdit />
              </td>
              <td>
                <GrTrash />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Task;



Por otro lado tengo el componente Th.jsx con el siguiente contenido:


import { LuArrowDown } from "react-icons/lu";
import { LuArrowUp } from "react-icons/lu";

function Th({
  sortBy = null,
  handlerSorting = null,
  sortOrder = null,
  children,
}) {
  return (
    <th
      onClick={() => handlerSorting(sortBy)}
      className="whitespace-nowrap px-4 py-2 font-medium text-gray-900 hover:cursor-pointer"
    >
      {children}
      {handlerSorting && (
        <>
          {sortOrder[sortBy] === 1 ? (
            <LuArrowUp className="inline mx-1" />
          ) : (
            <LuArrowDown className="inline mx-1" />
          )}
        </>
      )}
    </th>
  );
}

export default Th;


*/
