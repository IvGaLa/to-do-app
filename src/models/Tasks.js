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
  static async getById(id) {
    return ToDoApp.getById(id)
  }


  // Añade una tarea
  static async add(data) {
    return ToDoApp.add(data)
  }


  // Elimina una tarea por el id
  static async deleteById(id) {
    return ToDoApp.deleteById(id)
  }

  // Actualiza la fecha en finishedAt a la fecha actual o a null dependiende de state
  static async setToggle(id, state) {
    return ToDoApp.setToggle(id, state)
  }

  // Hacemos un update de la tarea.
  static async update(data) {
    return ToDoApp.update(data)
  }
}
