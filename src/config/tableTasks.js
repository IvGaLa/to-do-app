import { getLocale } from "../locale/es"
import { tableNames } from "./tableNames"

export const tasks = {
  name: tableNames.tasks,
  fields: {
    id: {
      name: 'id',
      type: 'integer',
      label: 'Id',
      value: '',
      validation: {
        required: {
          value: true,
          message: getLocale('validations.errors.required')
        },
        integer: {
          value: true,
          message: getLocale('validations.errors.integer')
        }
      }
    },
    user: {
      name: 'user',
      type: 'text',
      label: 'Usuario',
      value: '',
      validation: {
        required: {
          value: true,
          message: getLocale('validations.errors.required')
        }
      }
    },
    title: {
      name: 'title',
      type: 'text',
      label: 'Título',
      value: '',
      validation: {
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
        }
      }
    },
    description: {
      name: 'description',
      type: 'text',
      label: 'Descripción',
      value: '',
      validation: {
        required: {
          value: true,
          message: getLocale('validations.errors.required')
        },
        integer: {
          value: true,
          message: getLocale('validations.errors.integer')
        },
        maxLength: {
          value: 100,
          message: getLocale('validations.errors.maxLength')
        }
      }
    },
    finished: {
      name: 'finished',
      type: 'integer',
      label: 'Completada',
      value: 0,
      validation: {
        bool: {
          value: true,
          message: getLocale('validations.errors.bool')
        }
      }
    },
    createdAt: {
      name: 'createdAt',
      type: 'text',
      label: 'Creada',
      value: '',
      validation: {
        datetime: {
          value: /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}$/, // Expresión regular para el formato YYYY-MM-DDTHH:MM
          message: getLocale('validations.errors.datetime')
        }
      }
    },
    modifiedAt: {
      name: 'modifiedAt',
      type: 'text',
      label: 'Modificada',
      value: '',
      validation: {
        datetime: {
          value: /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}$/, // Expresión regular para el formato YYYY-MM-DDTHH:MM
          message: getLocale('validations.errors.datetime')
        }
      }
    },
    finishedAt: {
      name: 'finishedAt',
      type: 'text',
      label: 'Finalizada',
      value: '',
      validation: {
        datetime: {
          value: /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}$/, // Expresión regular para el formato YYYY-MM-DDTHH:MM
          message: getLocale('validations.errors.datetime')
        }
      }
    }
  }
}