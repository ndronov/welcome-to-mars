import * as React from 'react'
import { Link } from 'gatsby'

import Input from '../Input'
import Button from '../Button'

import { useSignInForm } from './useSignInForm'

import * as styles from '../index.module.css'

function SignInForm() {
  const { errors, pending, onSubmit, onFocus } = useSignInForm();

  return (
    <form className={styles.authForm} onSubmit={onSubmit} noValidate>
      <h1 className={styles.title}>Sign in</h1>

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

      <Link to="signup" className={styles.authModeSwitchLink}>
        <span>Create account</span>
      </Link>
    </form>
  )
}

export default SignInForm
