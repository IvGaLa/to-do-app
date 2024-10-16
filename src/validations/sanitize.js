// Fichero para "sanitizar" los datos antes de pasar las validaciones del fomrulario y posterior envía a la BD

export const sanitizeInput = (input) => {
  // Si no es un string, no se necesita sanitización adicional
  if (typeof input !== 'string') return input;

  return input
    .trim()                                     // Quito espacios en blanco al principio y final
    .replace(/<script.*?>.*?<\/script>/gi, '')  // Scripts embebidos
    .replace(/['"\\;]/g, '')                    // Elimina comillas simples, dobles, barras invertidas y punto y coma
    .replace(/--/g, '')                         // Elimina comentarios SQL
    .replace(/</g, '&lt;')                      // Escapa símbolos de menor que
    .replace(/>/g, '&gt;');                     // Escapa símbolos de mayor que
};


// Función para sanitizar todo el formulario
export const sanitizeFormData = (data) => {
  const sanitizedData = { ...data };
  Object.keys(data).forEach(key => {
    sanitizedData[key].value = sanitizeInput(data[key].value);
  });
  return sanitizedData;
};
