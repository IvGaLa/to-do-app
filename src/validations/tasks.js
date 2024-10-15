import { tasks } from "../config/tableTasks";
import { getValidations } from "../lib/validations";
import { sanitizeFormData } from "./sanitize";

const validationsTasks = getValidations(tasks.fields)


// Realizamos un replave para el mensaje de error.
const replaceMessage = ({ message, label, value }) => {
  return message.replace("%field%", label).replace("%value%", value)
}


// Reglas de validación
const validateField = (fieldName, formValues, rules) => {
  const { value, label } = formValues[fieldName]
  const fieldRules = rules[fieldName];

  if (fieldRules.required && !value) {
    return replaceMessage({ message: fieldRules.required.message, label, value })
  }

  if (fieldRules.minLength && value.length < fieldRules.minLength.value) {
    return replaceMessage({ message: fieldRules.minLength.message, label, value: fieldRules.minLength.value })
  }

  if (fieldRules.maxLength && value.length > fieldRules.maxLength.value) {
    return replaceMessage({ message: fieldRules.maxLength.message, label, value: fieldRules.maxLength.value })
  }

  if (fieldRules.pattern && !fieldRules.pattern.value.test(value)) {
    return replaceMessage({ message: fieldRules.pattern.message, label, value })
  }

  if (fieldRules.min && value < fieldRules.min.value) {
    return replaceMessage({ message: fieldRules.min.message, label, value: fieldRules.min.value })
  }

  if (fieldRules.max && value > fieldRules.max.value) {
    return replaceMessage({ message: fieldRules.max.message, label, value: fieldRules.max.value })
  }

  return null; // Si no hay errores, devuelve null
};

export const validateForm = (formValues) => {
  const errors = {};

  // Sanitizamos los datos
  const formValuesSanitized = sanitizeFormData(formValues)

  Object.keys(formValuesSanitized).forEach((fieldName) => {
    const error = validateField(fieldName, formValuesSanitized, validationsTasks);
    if (error) {
      errors[fieldName] = error;
    }
  });

  return errors;
};


