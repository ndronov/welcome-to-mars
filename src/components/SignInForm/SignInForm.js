import * as React from 'react'
import { Link } from 'gatsby'

import { useSignInForm } from './useSignInForm'

import * as styles from '../index.module.css'

// TODO вынести input в компоненты ? нет. или да..

function SignInForm() {
  const { errors, pending, onSubmit, onFocus } = useSignInForm();

  return (
    <form className={styles.authForm} onSubmit={onSubmit} noValidate>
      <h1 className={styles.title}>Sign in</h1>

      <label className={styles.authFormField}>
        Email
        <input className={styles.input} type="email" id="email" name="email" required disabled={pending} onFocus={onFocus} />
        {errors.email && <span className={styles.error}>{errors.email}</span>}
      </label>

      <label className={styles.authFormField}>
        Password
        <input className={styles.input} type="password" id="password" name="password" required disabled={pending} onFocus={onFocus} />
        {errors.password && <span className={styles.error}>{errors.password}</span>}
      </label>

      <div className={styles.gap} />

      <button className={styles.submitButton} type="submit" disabled={pending}>Sign in</button>

      <Link to="signup" className={styles.authModeSwitchLink}>
        <span>Create account</span>
      </Link>
    </form>
  )
}

export default SignInForm
