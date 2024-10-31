/**
 * 
 * Fichero de configuración general.
 * configData guardará un objeto con toda la configuración del proyecto.
 * 
 */


import { routes } from "@config/routes";
import { tableNames } from "@config/tableNames";
import { tasks } from "@config/tableTasks";

// Recuperamos las variables de conexión para turso
const { VITE_TURSO_AUTH_TOKEN: authToken, VITE_TURSO_DATABASE_URL: url } =
  import.meta.env;

export const configData = {
  authToken,
  url,
  tableNames,
  tables: {
    tasks
  },
  routes
}