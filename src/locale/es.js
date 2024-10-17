import { localstorage } from "./localstorage";
import { add } from "./components/content/add";
import { list } from "./components/content/list";
import { errors } from "./validations.errors";
import { footer } from "./components/footer";
import { header } from "./components/header";
import { home } from "./components/home";
import { modify } from "./components/content/modify";
import { _delete } from "./components/content/delete";
import { tasks } from "./components/models/tasks";

// Guardamos todos los textos disponibles en la aplicación
const locale = {
  generic: 'undefinied_text',
  title: 'To-Do App',
  // Guarda el formato de la fecha que queremos como se muestre en los listados.
  formatdatetimetoview: 'dd/LL/yyyy HH:mm', // https://moment.github.io/luxon/#/formatting?id=table-of-tokens
  localstorage,
  validations: {
    errors
  },
  models: {
    tasks
  },
  components: {
    home,
    footer,
    header,
    content: {
      add,
      list,
      modify,
      delete: _delete
    }
  }
}


// Devuelve el valor de locale según la clave pasada por parámetro.
// Si no se le pasa clave o la clave pasada no existe devuelve el texto "generic" que se haya definido arriba
export const getLocale = (param = 'generic') => {
  if (param === 'generic') return locale.generic

  const keys = param.split('.'); // Divide la ruta por '.'
  let result = locale;

  // Recorre los niveles del objeto usando las claves
  for (const key of keys) {
    result = result[key];
    // Si la clave es undefinied, devolvemos la clave genérica.
    if (result === undefined) return locale.generic
  }

  return result;
}

