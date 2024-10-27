/**
 * Componente para mostrar un span con los datos pasados por props.
 * Lo utilizo en el ConfirmDelete para mostrar los datos de la tarea a eliminar.
 */

import { getLocale } from "@locales/es";

function Pspan({ name, value }) {
  return (
    <p className="mb-2">
      <span className="font-semibold pr-2">
        {getLocale(`models.tasks.label.${name}`)}:
      </span>
      {value}
    </p>
  );
}

export default Pspan;
