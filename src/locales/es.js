import { localstorage } from "@locales/localstorage";

import { errors } from "@locales/validations.errors";

import { home } from "@locales/components/home";
import { footer } from "@locales/components/footer";
import { header } from "@locales/components/header";
import { loading } from "@locales/components/loading";

import { add } from "@locales/components/content/add";
import { list } from "@locales/components/content/list";
import { modify } from "@locales/components/content/modify";
import { _delete } from "@locales/components/content/delete";
import { notfound } from "@locales/components/content/notfound";

import { tasks } from "@locales/components/models/tasks";


const replaceVar = ':replace:'

// Guardamos todos los textos disponibles en la aplicación
const locale = {
  generic: 'undefinied_text',
  title: 'To-Do App',
  // Guarda el formato de la fecha que queremos como se muestre en los listados.
  formatdatetimetoview: 'dd/LL/yyyy HH:mm', // https://moment.github.io/luxon/#/formatting?id=table-of-tokens
  formatdatetimetodb: "yyyy-LL-dd'T'HH:mm", // https://moment.github.io/luxon/#/formatting?id=table-of-tokens
  githubUser: 'IvGaLa',
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
    loading,
    content: {
      add,
      list,
      modify,
      delete: _delete,
      notfound
    }
  }
}


// Devuelve el valor de locale según la clave pasada por parámetro.
// Si no se le pasa clave o la clave pasada no existe devuelve el texto "generic" que se haya definido arriba
export const getLocale = (param = 'generic', replacements = []) => {
  if (param === 'generic') return locale.generic;

  const keys = param.split('.'); // Divide la ruta por '.'
  let result = locale;

  // Recorre los niveles del objeto usando las claves
  for (const key of keys) {
    result = result[key];
    // Si la clave es undefined, devolvemos la clave genérica.
    if (result === undefined) return locale.generic;
  }

  // Si no le pasamos un array para reemplazar valores, salimos con lo que tenemos.
  if (replacements.length == 0) return result

  // Crear una expresión regular usando replaceVar de forma dinámica
  const regex = new RegExp(replaceVar, 'g');
  let index = 0;
  return result.replace(regex, () => replacements[index++] || replaceVar);
};
