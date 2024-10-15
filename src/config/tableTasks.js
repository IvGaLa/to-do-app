import { tableNames } from "./tableNames"

export const tasks = {
  name: tableNames.tasks,
  fields: {
    id: {
      name: 'id',
      type: 'integer',
      label: 'Id',
      value: ''
    },
    user: {
      name: 'user',
      type: 'text',
      label: 'Usuario',
      value: ''
    },
    title: {
      name: 'title',
      type: 'text',
      label: 'Título',
      value: ''
    },
    description: {
      name: 'description',
      type: 'text',
      label: 'Descripción',
      value: ''
    },
    finished: {
      name: 'finished',
      type: 'integer',
      label: 'Completada',
      value: 0
    },
    createdAt: {
      name: 'createdAt',
      type: 'integer',
      label: 'Creada',
      value: ''
    },
    modifiedAt: {
      name: 'modifiedAt',
      type: 'integer',
      label: 'Modificada',
      value: ''
    },
    finishedAt: {
      name: 'finishedAt',
      type: 'integer',
      label: 'Finalizada',
      value: ''
    }
  }
}