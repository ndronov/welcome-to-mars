import * as React from 'react'

import Input from '../Input'
import Button from '../Button'
import Form from '../Form'

import { useSignInForm } from './useSignInForm'

import * as styles from './SignInForm.module.css'

function SignInForm() {
  const { errors, pending, onSubmit, onFocus } = useSignInForm();

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
        className={styles.createAccountButton}
        kind="outlined"
        label="Create account"
        to="signup"
      />
    </Form>
  )
}

export default SignInForm
