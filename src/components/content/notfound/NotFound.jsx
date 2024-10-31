/**
 *
 * Componente para mostrar el típico error 404 (not found)
 *
 */

import { useNavigate } from "react-router-dom";

import { configData } from "@config/config";
import { getLocale } from "@locales/es";

function NotFound() {
  const navigate = useNavigate();

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="p-6 bg-white shadow-md rounded-lg text-center">
        <h1 className="text-6xl font-bold text-red-500 mb-4">404</h1>
        <h2 className="text-2xl font-semibold mb-4">
          {getLocale("components.content.notfound.pageNotFound")}
        </h2>
        <p className="text-gray-600 mb-6">
          {getLocale("components.content.notfound.pageNotFoundDescription")}
        </p>
        <button
          onClick={() => navigate(configData.routes.home.path)}
          className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          {getLocale("components.content.notfound.buttonBack")}
        </button>
      </div>
    </div>
  );
}

export default NotFound;
