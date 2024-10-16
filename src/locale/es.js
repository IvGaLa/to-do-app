import { localstorage } from "./localstorage";
import { add } from "./components.content.add";
import { list } from "./components.content.list";
import { errors } from "./validations.errors";

// Guardamos todos los textos disponibles en la aplicación
const locale = {
  generic: 'undefinied_text',
  localstorage,
  validations: {
    errors
  },
  components: {
    content: {
      add,
      list
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

