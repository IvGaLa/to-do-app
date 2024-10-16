export const errors = {
  required: 'El campo %field% es obligatorio.',
  integer: 'El campo %field% debe ser un número.',
  maxLength: 'El campo %field% no puede tener mas de %value% carácteres.',
  bool: 'El campo %field% debe ser verdadero o falso.',
  datetime: 'El formato del campo %field% no es correcto',
  pattern: 'El campo no se adapta al formato esperado.' // Este mensaje es genérico ya que no sabemos qué regexp se utilizará.
}