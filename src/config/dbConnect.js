import { createClient } from "@libsql/client";
import { configData } from "./config";

const { url, authToken } = configData

export const dbCon = createClient({
  url,
  authToken
});