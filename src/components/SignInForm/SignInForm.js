import React from 'react'

import { Input } from '../Input'
import { Button } from '../Button'
import { Form } from '../Form'
import { useForm } from '../Form/useForm'

import { SignInAPI } from '../../api/SignInAPI';

import * as styles from './SignInForm.module.css'

const yes = (param) => {
  window.location = 'https://mars.com/'
  console.log('успех....', param)
}

const no = (param) => console.log('провал....', param)

const useFormArgs = {
  onSubmit: SignInAPI,
  onSuccess: yes,
  onFailure: no,
}

export function SignInForm() {
  const { errors, pending, onSubmit, onFocus } = useForm(useFormArgs)

  return (
    <Form onSubmit={onSubmit} title="Sign in">
      <Input
        disabled={pending}
        error={errors.email}
        id="email"
        label="Email"
        name="email"
        onFocus={onFocus}
        required
        type="email"
      />

      <Input
        disabled={pending}
        error={errors.password}
        id="password"
        label="Password"
        name="password"
        onFocus={onFocus}
        required
        type="password"
      />

      <div className={styles.gap} />

      <Button
        disabled={pending}
        label="Sign in"
        type="submit"
      />

      <Button
        className={styles.signUpButton}
        kind="outlined"
        label="Create account"
        to="signup"
      />
    </Form>
  )
}
