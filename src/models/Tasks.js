import { configData } from "../config/config"
import { dbCon } from "../config/dbConnect";

export class Tasks {
  constructor() {
    this.table = configData.tables.tasks.name
  }
  async getAll() {
    const sql = `SELECT * FROM ${this.table}`
    const response = await dbCon.execute(sql);
    return response.rows;
  }

  // async add(data) {
  //   const sql = `INSERT INTO ${this.table}`
  // }
}
