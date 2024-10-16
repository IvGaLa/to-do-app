import ErrorMessage from "./ErrorMessage";

function InputField({ formData, handlerChange, name, validationErrors }) {
  return (
    <div>
      <label className="text-gray-700 dark:text-gray-200" htmlFor={name}>
        {formData[name].label}
      </label>
      <input
        name={name}
        type="text"
        className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
        value={formData[name].value || ""} // Asegura que siempre tenga un valor, por defecto vacío
        onChange={(e) => handlerChange(e)}
      />
      <ErrorMessage error={validationErrors[name]} />
    </div>
  );
}

export default InputField;
