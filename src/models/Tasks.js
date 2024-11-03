/**
 * 
 * Modelo para la tabla tasks
 * 
 * Aquí solo definimos los métodos a utilizar, es un bypass hacia el modelo genérico al que llamo el mismo método con la tabla del modelo
 * 
 */

import { configData } from "@config/config";
import { ToDoApp } from "@models/ToDoApp";

export class Tasks {

  // Definimos un objeto tabla que contendra el nombre y los campos
  static table = {}

  static getTableName() {
    this.table.name = configData.tables['tasks'].name
    this.table.fields = configData.tables[this.table.name].fields
  }

  // Devuelve todas las tareas
  static async getAll() {
    this.getTableName()
    return ToDoApp.getAll(this.table)
  }


  // Devuelve todas las tareas de un usuario
  static async getAllByUserId(userid) {
    this.getTableName()
    return ToDoApp.getAllByUserId(userid, this.table)
  }


  // Devuelve una tarea según su id
  static async getById(id) {
    this.getTableName()
    return ToDoApp.getById(id, this.table)
  }


  // Añade una tarea
  static async add(data) {
    this.getTableName()
    return ToDoApp.add(data, this.table)
  }


  // Elimina una tarea por el id
  static async deleteById(id) {
    this.getTableName()
    return ToDoApp.deleteById(id, this.table)
  }

  // Actualiza la fecha en finishedAt a la fecha actual o a null dependiende de state
  static async setToggle(id, state) {
    this.getTableName()
    return ToDoApp.setToggle(id, state, this.table)
  }

  // Hacemos un update de la tarea.
  static async update(data) {
    this.getTableName()
    return ToDoApp.update(data, this.table)
  }
}
