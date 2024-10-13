import { configData } from "../config/config"
import { dbCon } from "../config/dbConnect";

export class Tasks {
  constructor() {
    this.name = configData.tables.tasks.name
  }

  async getAll(setResults) {
    const sql = `SELECT * FROM ${this.name}`
    const response = await dbCon.execute(sql);
    setResults(response.rows)
    return true;
  }
}