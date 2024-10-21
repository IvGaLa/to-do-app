import { getLocale } from "@locales/es"

import { tableNames } from "./tableNames"
import { validationTypes } from "./validationsTypes"

const { required, integer, bool, datetime, maxLength } = validationTypes


export const tasks = {
  name: tableNames.tasks,
  fields: {
    id: {
      name: 'id',
      type: 'integer',
      label: getLocale('models.tasks.label.id'),
      value: '',
      validation: {
        required,
        integer,
      }
    },
    user: {
      name: 'user',
      type: 'text',
      label: getLocale('models.tasks.label.user'),
      value: '',
      validation: {
        required,
      }
    },
    title: {
      name: 'title',
      type: 'text',
      label: getLocale('models.tasks.label.title'),
      value: '',
      validation: {
        required,
        maxLength: { ...maxLength, value: 25 }, // Por defecto el maxLength es 20, lo cambiamos a 25
      }
    },
    description: {
      name: 'description',
      type: 'text',
      label: getLocale('models.tasks.label.description'),
      value: '',
      validation: {
        required,
        maxLength: { ...maxLength, value: 100 },
      }
    },
    finished: {
      name: 'finished',
      type: 'integer',
      label: getLocale('models.tasks.label.finished'),
      value: 0,
      validation: {
        bool,
      }
    },
    createdAt: {
      name: 'createdAt',
      type: 'text',
      label: getLocale('models.tasks.label.createdAt'),
      value: '',
      validation: {
        datetime,
      }
    },
    modifiedAt: {
      name: 'modifiedAt',
      type: 'text',
      label: getLocale('models.tasks.label.modifiedAt'),
      value: '',
      validation: {
        datetime,
      }
    },
    finishedAt: {
      name: 'finishedAt',
      type: 'text',
      label: getLocale('models.tasks.label.finishedAt'),
      value: '',
      validation: {
        datetime,
      }
    }
  }
}