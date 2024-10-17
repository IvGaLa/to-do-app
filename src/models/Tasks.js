import { configData } from "../config/config"
import { dbCon } from "../config/dbConnect";
import { sanitizeInput } from "../validations/sanitize";

export class Tasks {
  constructor() {
    this.table = configData.tables.tasks.name
    this.fields = configData.tables.tasks.fields
  }


  // Devuelve todas las tareas
  async getAll() {
    const sql = `SELECT * FROM ${this.table}`
    const response = await dbCon.execute(sql);
    return response.rows;
  }


  // Devuelve todas las tareas de un usuario
  async getAllByUserId(userid) {
    const sql = `SELECT * FROM ${this.table} WHERE user='${sanitizeInput(userid)}';`
    const response = await dbCon.execute(sql);
    return response.rows;
  }


  // Devuelve una tarea según su id
  async getTaskById(id) {
    const sql = `SELECT * FROM ${this.table} WHERE id=${parseInt(id)};`
    const response = await dbCon.execute(sql);
    // Devuelve directamente la tarea
    return response.rows[0];
  }


  // Añade una tarea
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

    const response = await dbCon.execute(sql)

    // Devolvemos el objeto response completo ya que en el insert no hay rows como tal.
    return response;
  }



  // Elimina una tarea por el id
  async deleteById(id) {
    const sql = `DELETE FROM ${this.table} WHERE id=${id};`
    const response = await dbCon.execute(sql)
    return response;
  }
}
