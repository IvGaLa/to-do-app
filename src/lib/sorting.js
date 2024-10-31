/**
 * 
 * Librería para manejar la ordenación de las tareas.
 * 
 */

import { DateTime } from "luxon";

import { getLocale } from "@locales/es";


/**
 * Ordena por el campo de tipo texto.
 * 
 * Recibe un objeto como propiedades que debe contener
 * tasks: Las tareas a ordenar
 * orderBy: El campo por el que queremos ordenar
 * sortOrder: El "sentido" de la ordenación (Asc/Desc)
 * setSortOrder: Setea sortOrder
 * 
 */
const sortByText = {
  sorting: (props) => {
    const { tasks, orderBy, sortOrder, setSortOrder } = props
    const newOrder = { ...sortOrder }
    newOrder[orderBy] = sortOrder[orderBy] === 1 ? 0 : 1
    setSortOrder(newOrder)

    const newTasks = [...tasks].sort((a, b) => {
      // Con localeCompare realiza una comparación a nivel de string con carácteres "raros"
      return (newOrder[orderBy] === 1) ? a[orderBy].localeCompare(b[orderBy]) : b[orderBy].localeCompare(a[orderBy])
    }
    );
    return newTasks;
  },
};


/**
 * Ordena por el campo de tipo fecha.
 * 
 * Recibe un objeto como propiedades que debe contener
 * tasks: Las tareas a ordenar
 * orderBy: El campo por el que queremos ordenar
 * sortOrder: El "sentido" de la ordenación (Asc/Desc)
 * setSortOrder: Setea sortOrder
 * 
 */
const sortByDate = {
  sorting: (props) => {
    const { tasks, orderBy, sortOrder, setSortOrder } = props
    const newOrder = { ...sortOrder }
    newOrder[orderBy] = sortOrder[orderBy] === 1 ? 0 : 1
    setSortOrder(newOrder)

    const dateFormat = getLocale('formatdatetimetodb')

    const newTasks = [...tasks].sort((a, b) => {
      if (newOrder[orderBy] === 1) {
        if (a[orderBy] === null) return 1; // Si la fecha de "a" es null salimos
        if (b[orderBy] === null) return -1; // Si la fecha de "b" es null salimos
        // Formateamos la fecha y la convertimos a milisegundos con `toMillis()` para la comparación.
        return DateTime.fromFormat(a[orderBy], dateFormat).toMillis() - DateTime.fromFormat(b[orderBy], dateFormat).toMillis()
      } else {
        if (a[orderBy] === null) return -1; // Si la fecha de "a" es null salimos
        if (b[orderBy] === null) return 1; // Si la fecha de "b" es null salimos

        // Formateamos la fecha y la convertimos a milisegundos con `toMillis()` para la comparación.
        return DateTime.fromFormat(b[orderBy], dateFormat).toMillis() - DateTime.fromFormat(a[orderBy], dateFormat).toMillis()
      }

    });

    return newTasks;
  },
};

// Cada llave:valor corresponde con un campo de la base de datos/tabla seleccionada a ordenar.
const sortFunctions = {
  title: sortByText,
  description: sortByText,
  createdAt: sortByDate,
  modifiedAt: sortByDate,
  finishedAt: sortByDate,
};

// Guarda si se hará orden ASCENDENTE (1) o DESCENDENTE (0)
export const sortType = {
  title: 1,
  description: 1,
  createdAt: 1,
  modifiedAt: 1,
  finishedAt: 1,
}

export const sortBy = (props) => {
  const toSort = sortFunctions[props.orderBy];
  return toSort.sorting(props);
};