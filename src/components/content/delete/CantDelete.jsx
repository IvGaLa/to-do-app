/**
 * Componente para mostrar un mensaje si no se ha podido eliminar la tarea.
 */

import { getLocale } from "@locales/es";

function CantDelete() {
  return <div>{getLocale("components.content.delete.cantdelete")}</div>;
}

export default CantDelete;
