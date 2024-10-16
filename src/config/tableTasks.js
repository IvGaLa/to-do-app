import { tableNames } from "./tableNames"
import { validationTypes } from "./validationsTypes"

const { required, integer, bool, datetime, maxLength } = validationTypes


export const tasks = {
  name: tableNames.tasks,
  fields: {
    id: {
      name: 'id',
      type: 'integer',
      label: 'Id',
      value: '',
      validation: {
        required,
        integer,
      }
    },
    user: {
      name: 'user',
      type: 'text',
      label: 'Usuario',
      value: '',
      validation: {
        required,
      }
    },
    title: {
      name: 'title',
      type: 'text',
      label: 'Título',
      value: '',
      validation: {
        required,
        integer,
        maxLength,
      }
    },
    description: {
      name: 'description',
      type: 'text',
      label: 'Descripción',
      value: '',
      validation: {
        required,
        integer,
        maxLength,
      }
    },
    finished: {
      name: 'finished',
      type: 'integer',
      label: 'Completada',
      value: 0,
      validation: {
        bool,
      }
    },
    createdAt: {
      name: 'createdAt',
      type: 'text',
      label: 'Creada',
      value: '',
      validation: {
        datetime,
      }
    },
    modifiedAt: {
      name: 'modifiedAt',
      type: 'text',
      label: 'Modificada',
      value: '',
      validation: {
        datetime,
      }
    },
    finishedAt: {
      name: 'finishedAt',
      type: 'text',
      label: 'Finalizada',
      value: '',
      validation: {
        datetime,
      }
    }
  }
}