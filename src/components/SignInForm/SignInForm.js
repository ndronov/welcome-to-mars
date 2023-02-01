import React from 'react';

import { Input } from '../Input';
import { Button } from '../Button';
import { Form, useForm } from '../Form';

import { SignInAPI } from '../../api';
import { handleAuthSuccess, handleAuthFailure } from '../../helpers';

import * as formStyles from '../Form/form.module.css';

const args = {
  onSubmit: SignInAPI,
  onSuccess: handleAuthSuccess,
  onFailure: handleAuthFailure,
};

export function SignInForm() {
  const { errors, pending, onSubmit, onFocus } = useForm(args);

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

      <div className={formStyles.gap} />

      <Button disabled={pending} label="Sign in" type="submit" />

      <Button
        className={formStyles.modeChangeButton}
        kind="outlined"
        label="Create account"
        to="signup"
      />
    </Form>
  );
}
