/**
 * *** Obsoleto ***
 *
 * Componente para mostrar los campos de createdAt, modifiedAt y finishedAt en el listado
 *
 */

import { formatDataTime } from "@lib/datetime";
import { getLocale } from "@locales/es";

function SpanDateTime({ date, icon: Icon }) {
  return (
    <span className="block mb-1">
      <Icon className="inline" />
      <span className="px-1">
        {formatDataTime(date, getLocale("formatdatetimetoview"))}
      </span>
    </span>
  );
}

export default SpanDateTime;
