import { useState } from "react";
import { sortBy, sortType } from "../../../lib/sorting";
import Th from "./Th";

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
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Task;
