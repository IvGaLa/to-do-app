/**
 * 
 * Librería de utilidades para manejar fechas.
 * 
 */

import { DateTime } from "luxon";

/**
 * 
 * Formatea una fecha al formato pasado por parámetro
 * Si date o format son null devuelve la misma fecha que se le ha pasado.
 * 
 */
export const formatDataTime = (date, format) => {

  return (date && format) ? DateTime.fromISO(date).toFormat(format) : date;
};


/**
 * 
 * Recuperamos el día de hoy según el formato que le pasemos por parámetros
 * 
 */
export const getTodayDate = (format) => {
  return DateTime.now().toFormat(format);
}