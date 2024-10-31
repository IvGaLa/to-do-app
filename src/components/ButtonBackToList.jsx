/**
 *
 * Componente para mostrar un botón para volver al listado de tareas.
 *
 */

import { useNavigate } from "react-router-dom";

import { getLocale } from "@locales/es";
import { configData } from "@config/config";

function ButtonBackToList({ color = "green" }) {
  const navigate = useNavigate();

  /**
   * Utilizo un objeto con dos clases muy parecidas, solo cambia el color, pero si lo hago dinámicamente poniendo ${color} en el className del botón
   * tailwindcss no lo compila automáticamente y no se muestra correctamente el estilo.
   *
   * Otra solución sería añadir "safelist" en el fichero de configuración de tailwindcss (Ver allí el comentario.)
   */
  const colorClass = {
    green:
      "bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400",
    red: "bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400",
  };

  return (
    <button
      className={colorClass[color]}
      onClick={() => navigate(configData.routes.list.path)}
    >
      {getLocale("components.content.modify.backToList")}
    </button>
  );
}

export default ButtonBackToList;
