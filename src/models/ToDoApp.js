import { dbCon } from "@config/dbConnect";
import { sanitizeInput } from "@validations/sanitize";
import { getTodayDate } from "@lib/datetime";
import { getLocale } from "@locales/es";

export class ToDoApp {

  // Devuelve todas las tareas
  static async getAll(table) {
    const sql = `SELECT * FROM ${table.name}`
    const response = await dbCon.execute(sql);
    return response.rows;
  }


  // Devuelve todas las tareas de un usuario
  static async getAllByUserId(userid, table) {
    const sql = `SELECT * FROM ${table.name} WHERE user='${sanitizeInput(userid)}';`
    const response = await dbCon.execute(sql);
    return response.rows;
  }


  // Devuelve una tarea según su id
  static async getById(id, table) {
    const sql = `SELECT * FROM ${table.name} WHERE id=${parseInt(sanitizeInput(id))};`
    const response = await dbCon.execute(sql);
    // Devuelve directamente la tarea
    return response.rows[0];
  }


  // Añade una tarea
  static async add(data, table) {
    // Obtengo un array solo con los campos del formulario que no son null y existen en el modelo Tasks
    const { fields, values } = this.getValidFieldsToAdd(data, table)

    const sql = `INSERT INTO "${table.name}" ("${fields}") VALUES ("${values}");`

    const response = await dbCon.execute(sql)

    // Devolvemos el objeto response completo ya que en el insert no hay rows como tal.
    return response;
  }



  // Elimina una tarea por el id
  static async deleteById(id, table) {
    const sql = `DELETE FROM ${table.name} WHERE id=${sanitizeInput(id)};`
    const response = await dbCon.execute(sql)
    return response;
  }



  // Actualiza la fecha en finishedAt a la fecha actual o a null dependiende de state
  static async setToggle(id, state, table) {

    const finishedAt = (state === 1) ? `"${getTodayDate(getLocale("formatdatetimetodb"))}"` : 'NULL'

    const sql = `UPDATE "${table.name}" SET finishedAt=${finishedAt} WHERE id = ${sanitizeInput(id.value)}`

    const response = await dbCon.execute(sql)

    return response

  }

  // Actualizo una tarea
  static async update(data, table) {
    // Obtengo un array solo con los campos del formulario que no son null y existen en el modelo Tasks
    const valuesToUpdate = this.getValidFieldsToUpdate(data, table)
    const sql = `UPDATE "${table.name}" SET ${valuesToUpdate} WHERE id = ${data.id.value};`
    const response = await dbCon.execute(sql)

    // Devolvemos el objeto response completo ya que en el insert no hay rows como tal.
    return response;
  }

  // Obtengo un array solo con los campos del formulario que no son null y existen en el modelo Tasks
  static getValidFields(data, table) {
    return Object.values(data)
      .filter(field => field.value !== '' && field.value !== null && table.fields[field.name])
      .map(field => ({
        name: field.name,
        value: field.value
      }));
  }

  // Obtengo los datos para hacer el update
  static getValidFieldsToUpdate(data, table) {
    const validFields = this.getValidFields(data, table)
    return validFields.map((field) => {
      const fieldValue = Number.isInteger(field.value) ? field.value : `'${field.value}'`
      return `"${field.name}" = ${fieldValue}`
    }).join(', ')
  }


  // Obtengo los fields y los values por separado separados por comas para el insert.
  static getValidFieldsToAdd(data, table) {
    const validFields = this.getValidFields(data, table)

    const fields = validFields.map((field) => {
      return field.name
    }).join('", "')

    const values = validFields.map((field) => {
      return sanitizeInput(field.value)
    }).join('", "')


    return { fields, values }
  }

}
