import { useState } from "react";
import { tasks } from "../../../config/tableTasks";
import InputField from "./InputField";

function Add() {
  const initialState = Object.keys(tasks.fields).reduce((acc, key) => {
    acc[key] = { ...tasks.fields[key], name: null }; // Copia la estructura pero inicializa 'name' como una cadena vacía
    return acc;
  }, {});

  const [formData, setFormData] = useState(initialState);

  const handlerForm = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  const handlerChange = (e) => {
    const { name, value } = e.target;
    const newFieldsForm = { ...formData };
    newFieldsForm[name].name = value;
    setFormData(newFieldsForm);
  };

  return (
    <section className="max-w-4xl p-6 mx-auto bg-white rounded-md shadow-md dark:bg-gray-800">
      <h2 className="text-lg font-semibold text-gray-700 dark:text-white">
        <p onClick={() => console.log(initialState)}>Añadir tarea</p>
      </h2>
      <form>
        <InputField
          formData={formData}
          handlerChange={handlerChange}
          name="title"
          // label="Título"
        />

        <InputField
          formData={formData}
          handlerChange={handlerChange}
          name="description"
          // label="Descripción"
        />

        <div className="flex justify-start mt-6">
          <button
            className="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600"
            onClick={(e) => handlerForm(e)}
          >
            Añadir tarea
          </button>
        </div>
      </form>
    </section>
  );
}

export default Add;

/**


      


 */
