import { useCallback, useState } from 'react'

import { SignInAPI } from '../../api/SignInAPI'
import { getSubmittedFormData } from '../../helpers/forms'

const REQUIRED_FIELD_ERROR = 'Required field' // вынести ?

// TODO нужен ли этот хук ?

export function useForm() {
  const [errors, setErrors] = useState({})
  const [pending, setPending] = useState(false)

  const onFocus = useCallback((e) => {
      setErrors(currentErrors => ({ ...currentErrors, [e.target.name]: null }))
    }, []
  )

  const validate = useCallback( (e) => {
    const inputs = e.target.getElementsByTagName('input')
    const validationErrors = {}

    for (let input of Array.from(inputs)) {
      if (input.required && !input.value) {
        validationErrors[input.name] = REQUIRED_FIELD_ERROR
        continue;
      }

      delete validationErrors[input.name]
    }

    setErrors(validationErrors)

    const isValid = Object.keys(validationErrors).length === 0

    return isValid
  }, [])

  const onSubmit = useCallback(
    async (e) => {
      e.preventDefault()

      const isValid = validate(e)

      if (!isValid) return

      setPending(true)

      const credentials = getSubmittedFormData(e)
      const response = await SignInAPI(credentials)

      setPending(false)

      // if (response.success) {
      //   console.log('успех!!!!', response)
      //   window.open('https://mars.com/')
      // } else {
        // TODO показывать тост?
        // console.log('провал....', response)
      // }
    }, [validate]
  )

  return { errors, pending, onFocus, onSubmit }
}
