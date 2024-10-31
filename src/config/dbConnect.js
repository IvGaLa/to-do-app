/**
 * 
 * Fichero de configuración para la base de datos.
 * 
 */

import { createClient } from "@libsql/client";
import { configData } from "@config/config";

const { url, authToken } = configData

// Creamos la conexión a la base de datos de turso
export const dbCon = createClient({
  url,
  authToken
});