import { useState } from "react";
import { sortBy, sortType } from "../../../lib/sorting";
import Th from "./Th";
import { GrTrash, GrEdit, GrFormCheckmark } from "react-icons/gr";

import { tasks as tasksFields } from "../../../config/tableTasks";
import { getLocale } from "../../../locale/es";

function Task({ tasks, setTasks }) {
  const handlerSorting = (orderBy) => {
    setTasks(sortBy({ tasks, orderBy, sortOrder, setSortOrder }));
  };

  const [sortOrder, setSortOrder] = useState(sortType);
  const columns = [
    tasksFields.fields.title.name,
    tasksFields.fields.description.name,
    tasksFields.fields.createdAt.name,
    tasksFields.fields.modifiedAt.name,
    tasksFields.fields.finishedAt.name,
  ].map((field) => tasksFields.fields[field]);

  const userid = localStorage.getItem(getLocale("localstorage.userid"));

  return (
    <div className="overflow-x-auto">
      <span>Tu código de usuario es: {userid}</span>
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
                <div className="flex justify-between">
                  <GrEdit />
                  <GrTrash />
                  <GrFormCheckmark />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Task;
