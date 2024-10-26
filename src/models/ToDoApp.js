import { configData } from "@config/config";
import { dbCon } from "@config/dbConnect";
import { sanitizeInput } from "@validations/sanitize";
import { getTodayDate } from "@lib/datetime";
import { getLocale } from "@locales/es";

export class ToDoApp {
  tablename = ''
  fields = {}

  // Establece el nombre de la tabla del modelo que lo ha llamado y sus correspondientes campos.
  static getTableName(table = 'tasks') {
    this.tablename = configData.tables[table].name
    this.fields = configData.tables[table].fields
  }

  // Devuelve todas las tareas
  static async getAll(table = 'tasks') {
    this.getTableName(table)
    const sql = `SELECT * FROM ${this.tablename}`
    const response = await dbCon.execute(sql);
    return response.rows;
  }


  // Devuelve todas las tareas de un usuario
  static async getAllByUserId(userid, table = 'tasks') {
    this.getTableName(table)
    const sql = `SELECT * FROM ${this.tablename} WHERE user='${sanitizeInput(userid)}';`
    const response = await dbCon.execute(sql);
    return response.rows;
  }


  // Devuelve una tarea según su id
  static async getById(id, table = 'tasks') {
    this.getTableName(table)
    const sql = `SELECT * FROM ${this.tablename} WHERE id=${parseInt(sanitizeInput(id))};`
    const response = await dbCon.execute(sql);
    // Devuelve directamente la tarea
    return response.rows[0];
  }


  // Añade una tarea
  static async add(data, table = 'tasks') {
    this.getTableName(table)
    // Obtengo un array solo con los campos del formulario que no son null y existen en el modelo Tasks
    const { fields, values } = this.getValidFieldsToAdd(data)

    const sql = `INSERT INTO "${this.tablename}" ("${fields}") VALUES ("${values}");`

    const response = await dbCon.execute(sql)

    // Devolvemos el objeto response completo ya que en el insert no hay rows como tal.
    return response;
  }



  // Elimina una tarea por el id
  static async deleteById(id, table = 'tasks') {
    this.getTableName(table)
    const sql = `DELETE FROM ${this.tablename} WHERE id=${sanitizeInput(id)};`
    const response = await dbCon.execute(sql)
    return response;
  }

  // Actualiza finishedAt a la fecha actual (finished)
  static async setFinished(id, table = 'tasks') {
    this.getTableName(table)
    // Actualizamos el campo finishedAt con la fecha actual
    const finishedAt = getTodayDate(getLocale("formatdatetimetodb"))

    const sql = `UPDATE "${this.tablename}" SET finishedAt="${finishedAt}" WHERE id = ${sanitizeInput(id.value)}`

    const response = await dbCon.execute(sql)

    return response
  }


  // Actualiza finishedAt a null (opened)
  static async setOpened(id, table = 'tasks') {
    this.getTableName(table)
    // Actualizamos el campo finishedAt a null
    const sql = `UPDATE "${this.tablename}" SET finishedAt=NULL WHERE id = ${sanitizeInput(id.value)}`

    const response = await dbCon.execute(sql)

    return response
  }


  // Actualizo una tarea
  static async update(data, table = 'tasks') {
    this.getTableName(table)
    // Obtengo un array solo con los campos del formulario que no son null y existen en el modelo Tasks
    const valuesToUpdate = this.getValidFieldsToUpdate(data)
    const sql = `UPDATE "${this.tablename}" SET ${valuesToUpdate} WHERE id = ${data.id.value};`
    const response = await dbCon.execute(sql)

    // Devolvemos el objeto response completo ya que en el insert no hay rows como tal.
    return response;
  }

  // Obtengo un array solo con los campos del formulario que no son null y existen en el modelo Tasks
  static getValidFields(data, table = 'tasks') {
    this.getTableName(table)
    return Object.values(data)
      .filter(field => field.value !== '' && field.value !== null && this.fields[field.name])
      .map(field => ({
        name: field.name,
        value: field.value
      }));
  }

  // Obtengo los datos para hacer el update
  static getValidFieldsToUpdate(data, table = 'tasks') {
    this.getTableName(table)
    const validFields = this.getValidFields(data)
    return validFields.map((field) => {
      const fieldValue = Number.isInteger(field.value) ? field.value : `'${field.value}'`
      return `"${field.name}" = ${fieldValue}`
    }).join(', ')
  }


  // Obtengo los fields y los values por separado separados por comas para el insert.
  static getValidFieldsToAdd(data, table = 'tasks') {
    this.getTableName(table)
    const validFields = this.getValidFields(data)

    const fields = validFields.map((field) => {
      return field.name
    }).join('", "')

    const values = validFields.map((field) => {
      return sanitizeInput(field.value)
    }).join('", "')


    return { fields, values }
  }

}
