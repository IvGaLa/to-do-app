import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";

import { tasks } from "../../../config/tableTasks";
import InputField from "./InputField";
import DateField from "./DateField";
import { Tasks } from "../../../models/Tasks";

function Add() {
  //El id no lo queremos en el formulario de añadir.
  const { ...fields } = tasks.fields;
  delete fields.id;

  const [formData, setFormData] = useState(fields);

  const [newUserId, setNewUserId] = useState(false);

  const [resultAdd, setResultAdd] = useState("");

  const resetValues = () => {
    const { user, ...fieldsToReset } = formData;
    const reset = Object.keys(fieldsToReset).reduce((field, key) => {
      field[key] = { ...fieldsToReset[key], value: null };
      return field;
    }, {});
    reset[fields.user.name] = { ...user };
    reset[fields.finished.value] = 0;
    setFormData(reset);
  };

  const columnsText = ["title", "description"].map(
    (field) => tasks.fields[field]
  );

  const columnsDate = ["createdAt", "modifiedAt", "finishedAt"].map(
    (field) => tasks.fields[field]
  );

  const handlerForm = async (e) => {
    e.preventDefault();
    // to-do: Hacer el funcionamiento del formulario. Validación y posterior add a la base de datos.
    const tasksModel = new Tasks();
    const resultado = await tasksModel.add(formData);
    console.log(resultado);
    setResultAdd(resultado);

    resetValues(); // Reseteamos el formulario
  };

  const handlerChange = (e) => {
    const { name, value } = e.target;
    const newFieldsForm = { ...formData };
    newFieldsForm[name].value = value;
    setFormData(newFieldsForm);
  };

  // Comprobamos si el usuario tiene un userid creado en localstorage, si no lo tiene le asignamos uno nuevo.
  useEffect(() => {
    const userId = localStorage.getItem("userid")
      ? localStorage.getItem("userid")
      : getNewUserId();

    const newFieldsForm = { ...formData };
    newFieldsForm["user"].value = userId;
    setFormData(newFieldsForm);
  }, []);

  // Creamos y setemoas un nuevo user id.
  const getNewUserId = () => {
    const userid = uuidv4();
    localStorage.setItem("userid", userid);
    setNewUserId(true);
    return userid;
  };

  return (
    <section className="max-w-4xl p-6 mx-auto bg-white rounded-md shadow-md dark:bg-gray-800">
      <h1>{resultAdd}</h1>
      <h2 className="text-3xl font-semibold text-gray-700 dark:text-white flex justify-center mb-3">
        Añadir tarea
      </h2>
      <h3 className="mb-6">
        {newUserId
          ? "Hemos detectado que no tienes id de usuario creado, por lo que hemos generado uno nuevo: "
          : "Tu id de usuario es: "}
        <span className="px-3 font-bold">{formData["user"].value}</span>
      </h3>
      <form>
        <input type="hidden" value={formData["user"].value} name="user" />

        {columnsText.map((columnText, index) => (
          <InputField
            key={index}
            name={columnText.name}
            formData={formData}
            handlerChange={handlerChange}
          />
        ))}

        {columnsDate.map((columnDate, index) => (
          <DateField
            key={index}
            name={columnDate.name}
            handlerChange={handlerChange}
          />
        ))}

        <div className="flex justify-start mt-6">
          <button
            className="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600"
            onClick={(e) => handlerForm(e)}
          >
            Añadir tarea
          </button>
        </div>
      </form>
      {Object.entries(formData).map(([key, field], index) => (
        <p key={index}>
          {key}: {field.value}
        </p>
      ))}
    </section>
  );
}

export default Add;
