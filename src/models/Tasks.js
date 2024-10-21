import { ToDoApp } from "@models/ToDoApp";

export class Tasks {

  // Devuelve todas las tareas
  static async getAll() {
    return ToDoApp.getAll(this.table)
  }


  // Devuelve todas las tareas de un usuario
  static async getAllByUserId(userid) {
    return ToDoApp.getAllByUserId(userid)
  }


  // Devuelve una tarea según su id
  static async getTaskById(id) {
    return ToDoApp.getTaskById(id)
  }


  // Añade una tarea
  static async add(data) {
    return ToDoApp.add(data)
  }


  // Elimina una tarea por el id
  static async deleteById(id) {
    return ToDoApp.deleteById(id)
  }
}
