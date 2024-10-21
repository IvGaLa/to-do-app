import { getLocale } from "@locales/es"

export const validationTypes = {
  required: {
    value: true,
    message: getLocale('validations.errors.required')
  },
  integer: {
    value: true,
    message: getLocale('validations.errors.integer')
  },
  maxLength: {
    value: 20,
    message: getLocale('validations.errors.maxLength')
  },
  bool: {
    value: [true, false, 0, 1],
    message: getLocale('validations.errors.bool')
  },
  datetime: {
    value: /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}$/, // Expresión regular para el formato YYYY-MM-DDTHH:MM
    message: getLocale('validations.errors.datetime')
  },
  pattern: {
    value: 'regexp a evaluar', // Expresión regular para comprobar la validez del campo
    message: getLocale('validations.errors.pattern')
  },
}