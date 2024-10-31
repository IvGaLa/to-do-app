/**
 * 
 * Librería para ejecutar las validaciones
 * 
 */


// Recibe un objeto con todos los datos del modelo y devuelve solo los campos para las validaciones
export const getValidations = (fields) => {
  const validations = Object.keys(fields).reduce((acc, field) => {
    acc[field] = fields[field].validation;
    return acc;
  }, {});

  return validations
}