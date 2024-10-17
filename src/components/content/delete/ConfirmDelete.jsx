import { Link } from "react-router-dom";
import { formatDataTime } from "../../../lib/datetime";
import { getLocale } from "../../../locale/es";
import Pspan from "./Pspan";

const ConfirmDelete = ({ task, onDelete }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75 z-50">
      <div className="bg-white rounded-lg shadow-lg p-6 max-w-lg w-full">
        <h2 className="text-2xl font-bold text-red-600 mb-4">
          {getLocale("components.content.delete.confirm")}
        </h2>
        <Pspan locale={getLocale("models.tasks.label.title")}>
          {task.title}
        </Pspan>

        <Pspan locale={getLocale("models.tasks.label.description")}>
          {task.description}
        </Pspan>

        <Pspan locale={getLocale("models.tasks.label.createdAt")}>
          {formatDataTime(task.createdAt, getLocale("formatdatetimetoview")) ||
            getLocale("components.content.delete.datetimewithoutvalue")}
        </Pspan>

        <Pspan locale={getLocale("models.tasks.label.modifiedAt")}>
          {formatDataTime(task.modifiedAt, getLocale("formatdatetimetoview")) ||
            getLocale("components.content.delete.datetimewithoutvalue")}
        </Pspan>

        <Pspan locale={getLocale("models.tasks.label.finishedAt")}>
          {formatDataTime(task.finishedAt, getLocale("formatdatetimetoview")) ||
            getLocale("components.content.delete.datetimewithoutvalue")}
        </Pspan>

        <div className="mt-6 flex justify-between">
          <Link
            to="/list"
            className="px-4 py-2 bg-gray-400 hover:bg-gray-500 text-white font-semibold rounded-md"
          >
            {getLocale("components.content.delete.cancel")}
          </Link>
          <button
            onClick={() => onDelete(task.id)}
            className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-md"
          >
            {getLocale("components.content.delete.confirm")}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmDelete;
