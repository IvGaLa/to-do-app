/**
 *
 * Componente para mostrar un mensaje de estado para la operación de SetToggle
 *
 */

import ButtonBackToList from "@components/ButtonBackToList";

function SetMessage({ children, color }) {
  return (
    <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg shadow-lg p-6 w-80 text-center">
        {children}
        <ButtonBackToList color={color} />
      </div>
    </div>
  );
}

export default SetMessage;
