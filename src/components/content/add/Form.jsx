import { useEffect, useState, useCallback } from "react";
import { v4 as uuidv4 } from "uuid";

import { tasks } from "@config/tableTasks";
import { Tasks } from "@models/Tasks";
import { validateForm } from "@validations/tasks";
import { getLocale } from "@locales/es";
import FormTask from "@components/form/FormTask";
import { getTodayDate } from "@lib/datetime";

function Form({ setResultAdd }) {
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
    const currentDateTime = getTodayDate(getLocale("formatdatetimetodb"));

    const resetFields = Object.keys(formData).reduce((acc, key) => {
      acc[key] = { ...formData[key], value: "" };
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
      [initialFields.createdAt.name]: {
        ...initialFields.createdAt,
        value: currentDateTime,
      },
    }));

    // Vaciamos los errores que puedan haber.
    setValidationErrors({});
  }, []);

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

    // Añadimos la tarea a la base de datos.
    const response = await Tasks.add(formData);

    // Recuperamos el id asignado (Lo devuelve la consulta)
    const { lastInsertRowid } = response;

    // Recuperamos la tarea añadida
    const lastInsertTask = await Tasks.getById(lastInsertRowid);

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
  }, [resetValues]);

  /**
   *
   * Campos de texto para el formulario
   * Esto lo utilizo para crear un map y llamar un componente personalizado por cada campo de texto del formulario
   *
   */
  const columnsText = [
    initialFields[initialFields.title.name],
    initialFields[initialFields.description.name],
  ];

  const formProps = {
    handleFormSubmit,
    formData,
    initialFields,
    columnsText,
    validationErrors,
    handleInputChange,
    buttonText: getLocale("components.content.add.addbutton"),
  };

  return (
    <div>
      <h3 className="mb-6">
        {newUserId
          ? getLocale("components.content.add.newuserid")
          : getLocale("components.content.add.userid")}
        <span className="px-3 font-bold">
          {formData[initialFields.user.name].value}
        </span>
      </h3>

      <FormTask formProps={formProps} />
    </div>
  );
}

export default Form;
