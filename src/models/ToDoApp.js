import { configData } from "@config/config";
import { dbCon } from "@config/dbConnect";
import { sanitizeInput } from "@validations/sanitize";
import { getTodayDate } from "@lib/datetime";
import { getLocale } from "@locales/es";

class ToDoApp {
  tablename = ''
  fields = {}

  // Establece el nombre de la tabla del modelo que lo ha llamado y sus correspondientes campos.
  static getTableName() {
    // Crear un nuevo objeto de error para obtener la pila de llamadas
    const stack = new Error().stack;

    // Analizar la pila de llamadas para encontrar la clase que llamó a este método
    // Cogemos el nombre del modelo que hace la llamada y lo pasamos a lowercase
    const caller = stack.split('\n')[3].split(' ')[5].split('.')[0].toLowerCase();

    // Asignamos el nombre de la tabla según el nombre del modelo y los campos.
    this.tablename = configData.tables[caller].name
    this.fields = configData.tables[caller].fields
  }

  // Devuelve todas las tareas
  static async getAll() {
    const sql = `SELECT * FROM ${this.tablename}`
    const response = await dbCon.execute(sql);
    return response.rows;
  }


  // Devuelve todas las tareas de un usuario
  static async getAllByUserId(userid) {
    const sql = `SELECT * FROM ${this.tablename} WHERE user='${sanitizeInput(userid)}';`
    const response = await dbCon.execute(sql);
    return response.rows;
  }


  // Devuelve una tarea según su id
  static async getById(id) {
    const sql = `SELECT * FROM ${this.tablename} WHERE id=${parseInt(sanitizeInput(id))};`
    const response = await dbCon.execute(sql);
    // Devuelve directamente la tarea
    return response.rows[0];
  }


  // Añade una tarea
  static async add(data) {
    // Obtengo un array solo con los campos del formulario que no son null y existen en el modelo Tasks
    const { fields, values } = this.getValidFieldsToAdd(data)

    const sql = `INSERT INTO "${this.tablename}" ("${fields}") VALUES ("${values}");`

    const response = await dbCon.execute(sql)

    // Devolvemos el objeto response completo ya que en el insert no hay rows como tal.
    return response;
  }



  // Elimina una tarea por el id
  static async deleteById(id) {
    const sql = `DELETE FROM ${this.tablename} WHERE id=${sanitizeInput(id)};`
    const response = await dbCon.execute(sql)
    return response;
  }

  // Actualiza el check de finalizado (finished)
  static async setFinished(id) {
    // Actualizamos el campo finishedAt con la fecha actual
    const finishedAt = getTodayDate(getLocale("formatdatetimetodb"))

    const sql = `UPDATE "${this.tablename}" SET finishedAt="${finishedAt}" WHERE id = ${sanitizeInput(id.value)}`

    const response = await dbCon.execute(sql)

    return response
  }

  // Actualizo una tarea
  static async update(data) {
    // Obtengo un array solo con los campos del formulario que no son null y existen en el modelo Tasks
    const valuesToUpdate = this.getValidFieldsToUpdate(data)
    const sql = `UPDATE "${this.tablename}" SET ${valuesToUpdate} WHERE id = ${data.id.value};`
    const response = await dbCon.execute(sql)

    // Devolvemos el objeto response completo ya que en el insert no hay rows como tal.
    return response;
  }

  // Obtengo un array solo con los campos del formulario que no son null y existen en el modelo Tasks
  static getValidFields(data) {
    return Object.values(data)
      .filter(field => field.value !== '' && field.value !== null && this.fields[field.name])
      .map(field => ({
        name: field.name,
        value: field.value
      }));
  }

  // Obtengo los datos para hacer el update
  static getValidFieldsToUpdate(data) {
    const validFields = this.getValidFields(data)
    return validFields.map((field) => {
      const fieldValue = Number.isInteger(field.value) ? field.value : `'${field.value}'`
      return `"${field.name}" = ${fieldValue}`
    }).join(', ')
  }


  // Obtengo los fields y los values por separado separados por comas para el insert.
  static getValidFieldsToAdd(data) {
    const validFields = this.getValidFields(data)

    const fields = validFields.map((field) => {
      return field.name
    }).join('", "')

    const values = validFields.map((field) => {
      return sanitizeInput(field.value)
    }).join('", "')


    return { fields, values }
  }

} // Fin clase ToDoApp


// Usamos un Proxy para interceptar todas las llamadas a métodos estáticos
// Con esto lo que conseguimos es que cada vez que se llame a un método de la clase ToDoApp se ejecute ANTES el método getTableName para establer esos valores previos a las consultas.
const ToDoAppProxy = new Proxy(ToDoApp, {
  get(target, propKey) {
    const origMethod = target[propKey];

    if (typeof origMethod === 'function') {
      return function (...args) {
        // Llamamos automáticamente a getTableName antes de cualquier método estático
        target.getTableName();
        return origMethod.apply(target, args);
      };
    }

    return origMethod;
  },
});

export { ToDoAppProxy as ToDoApp };