/**
 *
 * Componente para gestionar el formulario de modificar una tarea
 *
 */

import { useCallback, useEffect, useState } from "react";

import { tasks } from "@config/tableTasks";
import { getLocale } from "@locales/es";
import { validateForm } from "@validations/tasks";
import { getTodayDate } from "@lib/datetime";
import { Tasks } from "@models/Tasks";

import FormTask from "@components/form/FormTask";
import Loading from "@components/Loading";
import Updated from "@components/content/modify/Updated";

function ModifyForm({ task }) {
  const initialFields = tasks.fields;

  /**
   * Definimos algunos estados
   *
   * formData: Datos de los input del formulario
   * formProps: Datos para la generación del formulario
   * validationErrors: Errores de validación
   * updated: Guardará si ya se ha guardado los datos a modificar o aún no se han enviado
   */
  const [formData, setFormData] = useState(null);
  const [formProps, setFormProps] = useState(null);
  const [validationErrors, setValidationErrors] = useState({});
  const [updated, setUpdated] = useState(false);

  const buttonText = getLocale("components.content.modify.modifyTask");

  useEffect(() => {
    /**
     * Hacemos una copia completa del objeto initialFields para después asignar a "" (cadena vacía) los valores que sean null
     */
    const valuesToForm = JSON.parse(JSON.stringify(initialFields));

    Object.keys(initialFields).forEach((key) => {
      valuesToForm[initialFields[key].name].value =
        task[initialFields[key].name] === null
          ? ""
          : task[initialFields[key].name];
    });

    setFormData(valuesToForm);
  }, [task]);

  /**
   * Si ya tenemos datos del formulario (hemos completado el select de la tarea a modificar) generamos las propiedades para mostrar el formulario
   */
  useEffect(() => {
    if (formData) {
      setFormProps({
        handleFormSubmit,
        formData,
        initialFields,
        columnsText,
        validationErrors,
        handleInputChange,
        buttonText,
      });
    }
  }, [formData, validationErrors]);

  /**
   * Manejador de los inputs
   */
  const handleInputChange = useCallback((e) => {
    const { name, value } = e.target;

    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: { ...prevFormData[name], value },
    }));
  }, []);

  /**
   * Manejador del submit del formulario
   */
  const handleFormSubmit = async (e) => {
    e.preventDefault();

    /**
     * Hacemos la validación de los datos a guardar
     */
    const errors = validateForm(formData);

    if (Object.keys(errors).length > 0) {
      // Si hay errores, los seteamos para mostrarlos y salimos
      setValidationErrors(errors);
    } else {
      // Todo ok, hacemos el update...
      const valuesToForm = JSON.parse(JSON.stringify(formData));
      valuesToForm.modifiedAt.value = getTodayDate(
        getLocale("formatdatetimetodb")
      );
      const response = await Tasks.update(valuesToForm);

      if (response.rowsAffected === 1) {
        setUpdated(true);
        // Quitamos los errores.
        setValidationErrors({});
      }
    }
  };

  /**
   * Campos de texto para el formulario
   * Esto lo utilizo para crear un map y llamar un componente personalizado por cada campo de texto del formulario
   */
  const columnsText = [
    initialFields[initialFields.title.name],
    initialFields[initialFields.description.name],
  ];

  return (
    <>
      {formProps && formData ? (
        <>{updated ? <Updated /> : <FormTask formProps={formProps} />}</>
      ) : (
        <Loading />
      )}
    </>
  );
}

export default ModifyForm;
