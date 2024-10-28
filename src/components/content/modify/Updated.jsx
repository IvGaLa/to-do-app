/**
 * *** Obsoleto ***
 *
 * Componente para mostrar un mensaje de ok al modificar una tarea
 *
 */

import OkMessage from "@components/form/OkMessage";
import { getLocale } from "@locales/es";

function Updated() {
  return (
    <div>
      <OkMessage ok={getLocale("components.content.modify.taskUpdated")} />
    </div>
  );
}

export default Updated;
