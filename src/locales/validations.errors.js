/**
 * 
 * Variables para el locale para los mensajes de error de las validaciones del formulario.
 * 
 */

/**
 * %field%: Hace referencia al label del campo del formulario
 * %value%: Hace referencia al valor a validar del campo que se ha enviado en el formulario
 */
export const errors = {
  required: 'El campo %field% es obligatorio.',
  integer: 'El campo %field% debe ser un número.',
  maxLength: 'El campo %field% no puede tener mas de %value% carácteres.',
  bool: 'El campo %field% debe ser verdadero o falso.',
  datetime: 'El formato del campo %field% no es correcto',
  pattern: 'El campo no se adapta al formato esperado.' // Este mensaje es genérico ya que no sabemos qué regexp se utilizará.
}