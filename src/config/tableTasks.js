import { tableNames } from "./tableNames"

export const tasks = {
  name: tableNames.tasks,
  fields: {
    id: {
      name: 'id',
      type: 'integer'
    },
    title: {
      name: 'title',
      type: 'text'
    },
    description: {
      name: 'description',
      type: 'text'
    },
    active: {
      name: 'active',
      type: 'integer'
    },
    created: {
      name: 'created',
      type: 'integer'
    }
  }
}