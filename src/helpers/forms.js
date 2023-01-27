export function getSubmittedFormData(submitEvent) {
  const formData = new FormData(submitEvent.target)
  const nonEmptyFields = {}

  for (const [fieldName, fieldValue] of formData.entries()) {
    const isEmpty = fieldValue instanceof File ? !fieldValue.size : !fieldValue

    if (isEmpty) continue

    nonEmptyFields[fieldName] = fieldValue
  }

  return nonEmptyFields
}

const FIELD_REQUIREMENT_ERROR = 'Enter a value'
const FIELDS_EQUALITY_ERROR = 'Values did not match'

export function validateRequiredFields(inputs) {
  const errors = {}

  for (const input of inputs) {
    if (input.required && !input.value) {
      errors[input.name] = FIELD_REQUIREMENT_ERROR
      continue;
    }

    delete errors[input.name]
  }

  return errors
}

export function makeFieldsEqualityValidator(name1, name2) {
  return function validateFieldsEquality(inputs) {
    const field1 = inputs.find(i => i.name === name1)
    const field2 = inputs.find(i => i.name === name2)

    if (field1?.value === field2?.value) {
      return {}
    }

    return { [name2]: FIELDS_EQUALITY_ERROR }
  }
}

export const defaultFormValidators = [validateRequiredFields]
