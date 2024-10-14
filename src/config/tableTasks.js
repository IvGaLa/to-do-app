import { tableNames } from "./tableNames"

export const tasks = {
  name: tableNames.tasks,
  fields: {
    id: {
      name: 'id',
      type: 'integer',
      label: 'Id'
    },
    user: {
      name: 'user',
      type: 'text',
      label: 'Usuario'
    },
    title: {
      name: 'title',
      type: 'text',
      label: 'Título'
    },
    description: {
      name: 'description',
      type: 'text',
      label: 'Descripción'
    },
    finished: {
      name: 'finished',
      type: 'integer',
      label: 'Completada'
    },
    createdAt: {
      name: 'createdAt',
      type: 'integer',
      label: 'Creada'
    },
    modifiedAt: {
      name: 'modifiedAt',
      type: 'integer',
      label: 'Modificada'
    },
    finishedAt: {
      name: 'finishedAt',
      type: 'integer',
      label: 'Finalizada'
    }
  }
}