export function getSubmittedFormData(e) {
  const formData = new FormData(e.target);
  const nonEmptyFields = {};

  for (const [fieldName, fieldValue] of formData.entries()) {
    const isEmpty = fieldValue instanceof File ? !fieldValue.size : !fieldValue;

    if (isEmpty) continue;

    nonEmptyFields[fieldName] = typeof fieldValue === 'string'
      ? sanitizeUserInput(fieldValue)
      : fieldValue;
  }

  return nonEmptyFields;
}


export function sanitizeUserInput(userInput) {
  return userInput;
}
