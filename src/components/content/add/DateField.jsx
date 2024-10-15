import { useState } from "react";

function DateField({ name, handlerChange, formData }) {
  const [dateAt, setDateAt] = useState("");

  const handlerDate = (date) => {
    setDateAt(date.target.value);
    handlerChange(date);
  };

  return (
    <div>
      <label className="text-gray-700 dark:text-gray-200" htmlFor={name}>
        {formData[name].label}
      </label>
      <input
        type="datetime-local"
        name={name}
        onChange={(e) => handlerDate(e)}
        value={dateAt}
        className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
      />
    </div>
  );
}

export default DateField;
