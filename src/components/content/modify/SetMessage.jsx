/**
 *
 * Componente para mostrar un mensaje de estado para la operación de SetToggle
 *
 */

import { getLocale } from "@locales/es";

function SetMessage({ backToList, children, color }) {
  return (
    <>
      <h2 className={`text-xl font-semibold text-${color}-600 mb-4`}>
        {children}
      </h2>
      <button
        className={`bg-${color}-500 text-white py-2 px-4 rounded hover:bg-${color}-600 focus:outline-none focus:ring-2 focus:ring-${color}-400`}
        onClick={backToList}
      >
        {getLocale("components.content.modify.backToList")}
      </button>
    </>
  );
}

export default SetMessage;
