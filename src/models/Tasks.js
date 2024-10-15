import { configData } from "../config/config"
import { dbCon } from "../config/dbConnect";

export class Tasks {
  constructor() {
    this.table = configData.tables.tasks.name
    this.fields = configData.tables.tasks.fields
  }
  async getAll() {
    const sql = `SELECT * FROM ${this.table}`
    const response = await dbCon.execute(sql);
    return response.rows;
  }

  async add(data) {
    // Obtengo un array solo con los campos del formulario que no son null y existen en el modelo Tasks
    const fieldsToAdd = Object.values(data)
      .filter(field => field.value !== '' && field.value !== null && this.fields[field.name])
      .map(field => ({
        name: field.name,
        value: field.value
      }));


    const fields = fieldsToAdd.map((field) => {
      return field.name
    }).join('", "')

    const values = fieldsToAdd.map((field) => {
      return field.value
    }).join('", "')


    const sql = `INSERT INTO "${this.table}" ("${fields}") VALUES ("${values}");`

    await dbCon.execute(sql)
  }
}
