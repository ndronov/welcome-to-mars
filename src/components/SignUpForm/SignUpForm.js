import * as React from "react"

import { Input } from "../Input"
import { Button } from "../Button"
import { Form } from "../Form"
import { useForm } from "../Form/useForm"

import { SignUpAPI } from "../../api/SignUpAPI"
import { makeFieldsEqualityValidator } from "../../helpers/forms"
import { handleAuthSuccess, handleAuthFailure } from "../../helpers/auth"

import * as formStyles from "../Form/form.module.css"

const useFormArgs = {
  validators: [makeFieldsEqualityValidator("password", "confirmPassword")],
  onSubmit: SignUpAPI,
  onSuccess: handleAuthSuccess,
  onFailure: handleAuthFailure,
}

export function SignUpForm() {
  const { errors, pending, onSubmit, onFocus } = useForm(useFormArgs)

  return (
    <Form onSubmit={onSubmit} title="Sign up">
      <Input
        disabled={pending}
        error={errors.email}
        label="Email"
        name="email"
        onFocus={onFocus}
        required
        type="email"
      />

      <Input
        autoComplete="new-password"
        disabled={pending}
        error={errors.password}
        label="Password"
        name="password"
        onFocus={onFocus}
        required
        type="password"
      />

      <Input
        autoComplete="new-password"
        disabled={pending}
        error={errors.confirmPassword}
        label="Confirm"
        name="confirmPassword"
        onFocus={onFocus}
        required
        type="password"
      />

      <div className={formStyles.gap} />

      <Button disabled={pending} label="Sign up" type="submit" />

      <Button
        className={formStyles.modeChangeButton}
        kind="outlined"
        label="Already have an account"
        to="/"
      />
    </Form>
  )
}
