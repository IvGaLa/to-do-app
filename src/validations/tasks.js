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

  // Valida si el campo existe
  if (fieldRules.required && !value) {
    return replaceMessage({ message: fieldRules.required.message, label, value })
  }

  // Valida la longitud mínima del texto
  if (fieldRules.minLength && value.length < fieldRules.minLength.value) {
    return replaceMessage({ message: fieldRules.minLength.message, label, value: fieldRules.minLength.value })
  }

  // Valida la longitud máxima del texto
  if (fieldRules.maxLength && value.length > fieldRules.maxLength.value) {
    return replaceMessage({ message: fieldRules.maxLength.message, label, value: fieldRules.maxLength.value })
  }

  // Valida si el campo es un integer. 
  // Con isSafeInteger se comprueba que sea un entero y además esté dentro del rango mínimo y máximo que puede manejar javascript
  if (fieldRules.integer && !Number.isSafeInteger(value)) {
    return replaceMessage({ message: fieldRules.integer.message, label, value: fieldRules.integer.value })
  }

  // Valida una expresión regular.
  if (fieldRules.pattern && !fieldRules.pattern.value.test(value)) {
    return replaceMessage({ message: fieldRules.pattern.message, label, value })
  }

  // Valida una fecha en formato YYYY-MM-DDTHH:MM
  if (fieldRules.datetime && !fieldRules.datetime.value.test(value) && value) {
    return replaceMessage({ message: fieldRules.datetime.message, label, value })
  }

  // Valida el valor mínimo
  if (fieldRules.min && value < fieldRules.min.value) {
    return replaceMessage({ message: fieldRules.min.message, label, value: fieldRules.min.value })
  }

  // Valida el valor máximo
  if (fieldRules.max && value > fieldRules.max.value) {
    return replaceMessage({ message: fieldRules.max.message, label, value: fieldRules.max.value })
  }

  // Valida si el valor es bool (true/false o 0/1)
  if (fieldRules.bool && !fieldRules.bool.value.includes(value)) {
    return replaceMessage({ message: fieldRules.bool.message, label })
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


