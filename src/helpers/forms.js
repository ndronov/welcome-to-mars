export function getSubmittedFormData(e) {
  const formData = new FormData(e.target)
  const nonEmptyFields = {}

  for (const [fieldName, fieldValue] of formData.entries()) {
    const isEmpty = fieldValue instanceof File ? !fieldValue.size : !fieldValue

    if (isEmpty) continue

    nonEmptyFields[fieldName] = typeof fieldValue === 'string'
      ? sanitizeUserInput(fieldValue)
      : fieldValue
  }

  return nonEmptyFields
}


// TODO надо ли ?
export function sanitizeUserInput(userInput) {
  return userInput
}

const FIELD_REQUIREMENT_ERROR = 'Enter a value'
const FIELDS_EQUALITY_ERROR = 'Those values didn’t match'

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
  return function validateFieldsEquality(rawInputs) {
    const inputs = Array.from(rawInputs);
    const field1 = inputs.find(i => i.name === name1)
    const field2 = inputs.find(i => i.name === name2)

    if (field1.value === field2.value) {
      return {}
    }

    return { [name2]: FIELDS_EQUALITY_ERROR }
  }
}

export function getDefaultFormValidators() {
  return [validateRequiredFields]
}

export const defaultFormValidators = [validateRequiredFields]
