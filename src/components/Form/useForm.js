import { useCallback, useState } from 'react'

import { getSubmittedFormData, defaultFormValidators } from '../../helpers/forms'

export function useForm(args = {}) {
  const { validators = [], onSubmit: handleSubmit, onSuccess, onFailure } = args
  const [errors, setErrors] = useState({})
  const [pending, setPending] = useState(false)

  const onFocus = useCallback((e) => {
      setErrors(currentErrors => ({ ...currentErrors, [e.target.name]: null }))
    }, []
  )

  const validate = useCallback( (e) => {
    const rawInputs = e.target.getElementsByTagName('input')
    const inputs = Array.from(rawInputs)

    const allValidators = [...defaultFormValidators, ...validators]
    const validationErrors = allValidators.reduceRight((currentErrors, validator) => ({ ...currentErrors, ...validator(inputs) }), {})

    setErrors(validationErrors)

    const isValid = Object.keys(validationErrors).length === 0

    return isValid
  }, [validators])

  const onSubmit = useCallback(
    async (e) => {
      e.preventDefault()

      const isValid = validate(e)

      if (!isValid) return

      setPending(true)

      const data = getSubmittedFormData(e)
      const response = await handleSubmit(data)

      setPending(false)

      if (!response.success) {
        onFailure(response.payload);
        return;
      }

      onSuccess(response.payload)
    }, [validate, handleSubmit, onFailure, onSuccess]
  )

  return { errors, pending, onFocus, onSubmit }
}
