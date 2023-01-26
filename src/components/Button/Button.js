import * as React from 'react'

import * as styles from './button.module.css'

function Button(props) {
  const {
    disabled,
    label,
    onClick,
    type = 'button',
  } = props;

  return (
    <button
      className={styles.button}
      disabled={disabled}
      onClick={onClick}
      type={type}
    >
      {label}
    </button>
  )
}

export default Button
