import { Link } from "react-router-dom";

import { getLocale } from "../../../locale/es";
import Pspan from "./Pspan";
import PspanDateTime from "./PspanDateTime";
import DeleteButton from "./DeleteButton";
import { configData } from "../../../config/config";

const ConfirmDelete = ({ task }) => {
  const routeList = configData.routes.list.path;
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75 z-50">
      <div className="bg-white rounded-lg shadow-lg p-6 max-w-lg w-full">
        <h2 className="text-2xl font-bold text-red-600 mb-4">
          {getLocale("components.content.delete.confirm")}
        </h2>
        <Pspan name="title" value={task.title} />
        <Pspan name="description" value={task.description} />

        <PspanDateTime name="createdAt" value={task.createdAt} />
        <PspanDateTime name="modifiedAt" value={task.modifiedAt} />
        <PspanDateTime name="finishedAt" value={task.finishedAt} />

        <div className="mt-6 flex justify-between">
          <Link
            to={routeList}
            className="px-4 py-2 bg-gray-400 hover:bg-gray-500 text-white font-semibold rounded-md"
          >
            {getLocale("components.content.delete.cancel")}
          </Link>
          <DeleteButton id={task.id}>
            {getLocale("components.content.delete.confirm")}
          </DeleteButton>
        </div>
      </div>
    </div>
  );
};

export default ConfirmDelete;
