import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";

import { tasks } from "../../../config/tableTasks";
import InputField from "./InputField";
import DateField from "./DateField";
import { Tasks } from "../../../models/Tasks";
import { validateForm } from "../../../validations/tasks";
import { getLocale } from "../../../locale/es";

function Add() {
  //El id no lo queremos en el formulario de añadir.
  const { ...fields } = tasks.fields;
  delete fields.id;

  const [formData, setFormData] = useState(fields);

  const [newUserId, setNewUserId] = useState(false);

  const [resultAdd, setResultAdd] = useState("");

  const [validationErrors, setValidationErrors] = useState({});

  const resetValues = () => {
    const { user, finished, ...fieldsToReset } = formData;
    const reset = Object.keys(fieldsToReset).reduce((field, key) => {
      field[key] = { ...fieldsToReset[key], value: null };
      return field;
    }, {});
    reset[fields.user.name] = { ...user }; // Asignamos el usuario ya que es un campo oculto y lo hemos reseteado
    reset[fields.finished.name] = { ...finished }; // Lo mismo que con el campo finished

    setFormData(reset); // Limpiamos el formulario
    setValidationErrors({}); // Limpiamos los errores
  };

  // Campos tipo texto para el formulario
  const columnsText = [fields.title.name, fields.description.name].map(
    (field) => fields[field]
  );

  // Campos tipo fecha/hora para el formulario
  const columnsDate = [
    fields.createdAt.name,
    fields.modifiedAt.name,
    fields.finishedAt.name,
  ].map((field) => fields[field]);

  const handlerForm = async (e) => {
    e.preventDefault(); // Invalidamos el envío predeterminado del formulario

    const errors = validateForm(formData); // Validamos los datos del formulario

    // Si hay errors, los mostramos.
    if (Object.keys(errors).length > 0) {
      setValidationErrors(errors);
      return;
    }
    // Enviar datos
    const tasksModel = new Tasks();
    const resultado = await tasksModel.add(formData);
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
    const userId = localStorage.getItem(getLocale("localstorage.userid"))
      ? localStorage.getItem(getLocale("localstorage.userid"))
      : getNewUserId();

    const newFieldsForm = { ...formData };
    newFieldsForm[fields.user.name].value = userId;
    setFormData(newFieldsForm);
  }, []);

  // Creamos y setemoas un nuevo user id.
  const getNewUserId = () => {
    const userid = uuidv4();
    localStorage.setItem(getLocale("localstorage.userid"), userid);
    setNewUserId(true);
    return userid;
  };

  return (
    <section className="max-w-4xl p-6 mx-auto bg-white rounded-md shadow-md dark:bg-gray-800">
      <h1>{resultAdd}</h1>
      <h2 className="text-3xl font-semibold text-gray-700 dark:text-white flex justify-center mb-3">
        {getLocale("pages.add.title")}
      </h2>
      <h3 className="mb-6">
        {newUserId
          ? getLocale("pages.add.newuserid")
          : getLocale("pages.add.userid")}
        <span className="px-3 font-bold">
          {formData[fields.user.name].value}
        </span>
      </h3>
      <form>
        <input
          type="hidden"
          value={formData[fields.user.name].value}
          name={fields.user.name}
        />
        {columnsText.map((columnText, index) => (
          <InputField
            key={index}
            name={columnText.name}
            formData={formData}
            validationErrors={validationErrors}
            handlerChange={handlerChange}
          />
        ))}

        {columnsDate.map((columnDate, index) => (
          <DateField
            key={index}
            name={columnDate.name}
            formData={formData}
            validationErrors={validationErrors}
            handlerChange={handlerChange}
          />
        ))}

        <div className="flex justify-start mt-6">
          <button
            className="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600"
            onClick={(e) => handlerForm(e)}
          >
            {getLocale("pages.add.addbutton")}
          </button>
        </div>
      </form>
      {/* {Object.entries(formData).map(([key, field], index) => (
        <p key={index}>
          {key}: {field.value}
        </p>
      ))} */}
    </section>
  );
}

export default Add;
