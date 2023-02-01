import React from 'react';

import * as styles from './input.module.css';

export function Input(props) {
  const {
    autoComplete,
    disabled,
    error,
    label,
    name,
    onFocus,
    required,
    type,
  } = props;

  return (
    <label className={styles.container}>
      {label}

      <input
        autoComplete={autoComplete}
        className={styles.input}
        disabled={disabled}
        name={name}
        onFocus={onFocus}
        required={required}
        type={type}
      />

      {error && <span className={styles.error}>{error}</span>}
    </label>
  );
}
