import { useState } from "react";
import { GrLinkDown, GrLinkUp } from "react-icons/gr";

import { tasks as tasksFields } from "@config/tableTasks";
import { sortBy, sortType } from "@lib/sorting";

function SpanOrders({ tasks, setTasks }) {
  const handlerSorting = (orderBy) => {
    setTasks(sortBy({ tasks, orderBy, sortOrder, setSortOrder }));
  };

  const [sortOrder, setSortOrder] = useState(sortType);

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
