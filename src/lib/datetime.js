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