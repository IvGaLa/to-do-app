/**
 *
 * Componente para mostrar mensaje de tarea añadida correctamente.
 *
 */

import { useNavigate } from "react-router-dom";

import { getLocale } from "@locales/es";
import { configData } from "@config/config";

function Added({ resultAdd, setResultAdd }) {
  const routeAdd = configData.routes.add;

  const navigate = useNavigate();

  const backToAdd = () => {
    setResultAdd("");
    return navigate(routeAdd.path);
  };

  return (
    <div>
      <h3>
        {getLocale("components.content.add.addedTask", [resultAdd.title])}
      </h3>
      <span>
        <button
          className="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600"
          onClick={backToAdd}
        >
          {getLocale("components.content.add.addNewTask")}
        </button>
      </span>
    </div>
  );
}

export default Added;
