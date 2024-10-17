import { useNavigate } from "react-router-dom";
import { Tasks } from "../../../models/Tasks";
import { configData } from "../../../config/config";

const DeleteButton = ({ id, children }) => {
  const routeList = configData.routes.list.path;
  const routeCantDelete = configData.routes.cantdelete.path;
  const navigate = useNavigate();

  const onDelete = async () => {
    const task = new Tasks();
    const deleted = await task.deleteById(id);

    // Error al eliminar
    if (deleted.rowsAffected !== 1) return navigate(routeCantDelete);

    // Si la tarea se eliminó correctamente, navega a la lista
    return navigate(routeList);
  };

  return (
    <button
      className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-md"
      onClick={onDelete}
    >
      {children}
    </button>
  );
};

export default DeleteButton;
