import { useEffect, useState, useCallback } from "react";
import { v4 as uuidv4 } from "uuid";

import { tasks } from "../../../config/tableTasks";
import InputField from "./InputField";
import DateField from "./DateField";
import { Tasks } from "../../../models/Tasks";
import { validateForm } from "../../../validations/tasks";
import { getLocale } from "../../../locale/es";
import { DateTime } from "luxon";

function Add() {
  /**
   *
   * Elimina el campo 'id' que no será usado en el formulario
   *
   */
  const { id, ...initialFields } = tasks.fields;

  /**
   *
   * Declaración de estados
   *
   */
  const [formData, setFormData] = useState(initialFields);
  const [newUserId, setNewUserId] = useState(false);
  const [resultAdd, setResultAdd] = useState("");
  const [validationErrors, setValidationErrors] = useState({});

  /**
   *
   * Función para generar un nuevo User ID si no existe
   *
   */
  const getNewUserId = useCallback(() => {
    const userid = uuidv4();
    localStorage.setItem(getLocale("localstorage.userid"), userid);
    setNewUserId(true);
    return userid;
  }, []);

  /**
   *
   * Función para resetear el formulario
   *
   */
  const resetValues = useCallback(() => {
    // Guardamos la fecha y hora actual, lo usamos para el createAt
    const currentDateTime = DateTime.now().toFormat("yyyy-LL-dd'T'HH:mm");

    const resetFields = Object.keys(formData).reduce((acc, key) => {
      acc[key] = { ...formData[key], value: null };
      return acc;
    }, {});

    // Seteamos los datos del formulario
    setFormData((prevFormData) => ({
      ...prevFormData,
      ...resetFields,
      [initialFields.user.name]: {
        ...initialFields.user,
        value:
          localStorage.getItem(getLocale("localstorage.userid")) || // Si existe, cogemos el userid del localstorage
          getNewUserId(), // Si no existe generamos unos nuevo.
      },
      [initialFields.finished.name]: {
        ...initialFields.finished,
        value: 0,
      },
      [initialFields.createdAt.name]: {
        ...initialFields.createdAt,
        value: currentDateTime,
      },
    }));

    // Vaciamos los errores que puedan haber.
    setValidationErrors({});
  }, [formData]);

  /**
   *
   * Manejador del cambio en los campos del formulario
   *
   */
  const handleInputChange = useCallback((e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: { ...prevFormData[name], value },
    }));
  }, []);

  /**
   *
   * Manejador del envío del formulario
   *
   */
  const handleFormSubmit = async (e) => {
    // Evitamos el envío del formulario
    e.preventDefault();

    // Realizamos la validación del formulario
    const errors = validateForm(formData);
    if (Object.keys(errors).length > 0) {
      // Si hay errores, los seteamos para mostrarlos y salimos
      setValidationErrors(errors);
      return;
    }

    // Instanciamos el modelo de la tabla tasks
    const tasksModel = new Tasks();

    // Añadimos la tarea a la base de datos.
    const response = await tasksModel.add(formData);

    // Recuperamos el id asignado (Lo devuelve la consulta)
    const { lastInsertRowid } = response;

    // Recuperamos la tarea añadida
    const lastInsertTask = await tasksModel.getTaskById(lastInsertRowid);

    // Guardamos para mostrar la tarea añadida
    setResultAdd(lastInsertTask);

    // Borramos los datos del formulario.
    resetValues();
  };

  /**
   *
   * useEffect para resetear el formulario
   *
   */
  useEffect(() => {
    // Reseteamos el formulario
    resetValues();
  }, []);

  /**
   *
   * Campos de texto para el formulario
   * Esto lo utilizo para crear un map y llamar un componente personalizado por cada campo de texto del formulario
   *
   */
  const columnsText = [
    initialFields.title.name,
    initialFields.description.name,
  ].map((field) => initialFields[field]);

  /**
   *
   * Campos de fecha para el formulario
   * Lo mismo que arriba pero para los campos tipo fecha/hora a mostrar en el formulario
   *
   */
  const columnsDate = [
    initialFields.createdAt.name,
    initialFields.modifiedAt.name,
    initialFields.finishedAt.name,
  ].map((field) => initialFields[field]);

  return (
    <section className="max-w-4xl p-6 mx-auto bg-white rounded-md shadow-md dark:bg-gray-800">
      {resultAdd && (
        <h1>
          {getLocale("components.content.add.addedtask")} {resultAdd.title}
        </h1>
      )}

      <h2 className="text-3xl font-semibold text-gray-700 dark:text-white flex justify-center mb-3">
        {getLocale("components.content.add.title")}
      </h2>

      <h3 className="mb-6">
        {newUserId
          ? getLocale("components.content.add.newuserid")
          : getLocale("components.content.add.userid")}
        <span className="px-3 font-bold">
          {formData[initialFields.user.name].value}
        </span>
      </h3>

      <form onSubmit={handleFormSubmit}>
        <input
          type="hidden"
          value={formData[initialFields.user.name].value}
          name={initialFields.user.name}
        />

        {columnsText.map((columnText, index) => (
          <InputField
            key={index}
            name={columnText.name}
            formData={formData}
            validationErrors={validationErrors}
            handlerChange={handleInputChange}
          />
        ))}

        {columnsDate.map((columnDate, index) => (
          <DateField
            key={index}
            name={columnDate.name}
            formData={formData}
            validationErrors={validationErrors}
            handlerChange={handleInputChange}
          />
        ))}

        <div className="flex justify-start mt-6">
          <button
            className="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600"
            type="submit"
          >
            {getLocale("components.content.add.addbutton")}
          </button>
        </div>
      </form>
    </section>
  );
}

export default Add;
