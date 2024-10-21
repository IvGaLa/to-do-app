import { useState } from "react";
import { GrTrash, GrEdit, GrFormCheckmark } from "react-icons/gr";

import { sortBy, sortType } from "@lib/sorting";
import { tasks as tasksFields } from "@config/tableTasks";
import { getLocale } from "@locales/es";
import { configData } from "@config/config";

import TdDate from "@components/content/list/TdDate";
import IconLink from "@components/content/list/IconLink";
import Th from "@components/content/list/Th";

function Task({ tasks, setTasks }) {
  const { routes } = configData;

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
      <span>
        {getLocale("components.content.list.task.youruserid")} {userid}
      </span>
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
              <TdDate date={task.createdAt} />
              <TdDate date={task.modifiedAt} />
              <TdDate date={task.finishedAt} />
              <td>
                <div className="flex justify-between">
                  <IconLink to={`/${routes.modify.name}/${task.id}`}>
                    <GrEdit />
                  </IconLink>
                  <IconLink to={`/${routes.delete.name}/${task.id}`}>
                    <GrTrash />
                  </IconLink>
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
