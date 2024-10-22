import { tasks } from "@config/tableTasks";
import { tableNames } from "@config/tableNames";
import { routes } from "@config/routes";

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