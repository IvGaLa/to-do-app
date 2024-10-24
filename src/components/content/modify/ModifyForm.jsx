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
  const [formData, setFormData] = useState(null);
  const [formProps, setFormProps] = useState(null);
  const [validationErrors, setValidationErrors] = useState({});
  const [updated, setUpdated] = useState(false);

  const buttonText = getLocale("components.content.modify.modifyTask");

  useEffect(() => {
    const valuesToForm = JSON.parse(JSON.stringify(initialFields));

    Object.keys(initialFields).forEach((key) => {
      valuesToForm[initialFields[key].name].value =
        task[initialFields[key].name] === null
          ? ""
          : task[initialFields[key].name];
    });

    setFormData(valuesToForm);
  }, [task]);

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

  const handleInputChange = useCallback((e) => {
    const { name, value } = e.target;

    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: { ...prevFormData[name], value },
    }));
  }, []);

  const handleFormSubmit = async (e) => {
    e.preventDefault();

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
   *
   * Campos de texto para el formulario
   * Esto lo utilizo para crear un map y llamar un componente personalizado por cada campo de texto del formulario
   *
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
