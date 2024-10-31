/**
 *
 * Componente para mostrar un span con los datos pasados por props.
 * Lo utilizo en el ConfirmDelete para mostrar los datos de la tarea a eliminar.
 *
 */

import { formatDataTime } from "@lib/datetime";
import { getLocale } from "@locales/es";

import Pspan from "@components/content/delete/Pspan";

function PspanDateTime({ name, value }) {
  return (
    <Pspan
      name={name}
      value={
        formatDataTime(value, getLocale("formatdatetimetoview")) ||
        getLocale("components.content.delete.datetimeWithoutValue")
      }
    />
  );
}

export default PspanDateTime;
