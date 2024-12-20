/**
 * 
 * Fichero de configuración para las rutas.
 * 
 */

export const routes = {
  home: {
    name: 'home',
    path: '/',
  },
  add: {
    name: 'add',
    path: '/add',
  },
  modify: {
    name: 'modify',
    path: '/modify/:id',
  },
  list: {
    name: 'list',
    path: '/list',
  },
  delete: {
    name: 'delete',
    path: '/delete/:id',
  },
  toggle: {
    name: 'toggle',
    path: '/toggle/:id/:state' // state = 1 or 0 (finished or opened)
  },
  deleteerror: {
    name: 'deleteerror',
    path: '/delete/error',
  },
  error404: {
    name: 'error404',
    path: '*',
  }
}