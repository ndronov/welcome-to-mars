import * as React from 'react'

import * as styles from './input.module.css'

function Input(props) {
  const {
    disabled,
    error,
    id,
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
          className={styles.input}
          disabled={disabled}
          id={id}
          name={name}
          onFocus={onFocus}
          required={required}
          type={type}
        />

        {error && <span className={styles.error}>{error}</span>}
      </label>
  )
}

export default Input
