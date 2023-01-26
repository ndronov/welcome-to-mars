import * as React from 'react'
import { Link } from 'gatsby'

import * as styles from './button.module.css'

function Button(props) {
  const {
    className = '',
    disabled,
    label,
    onClick,
    to,
    type = 'button',
    kind = 'default',
  } = props

  const buttonKindStyle = styles[`button_${kind}`] ?? styles[`button_default`]

  if (!to) {
    return (
      <button
        className={`${styles.container} ${styles.button} ${buttonKindStyle} ${className}`}
        disabled={disabled}
        onClick={onClick}
        type={type}
      >
        {label}
      </button>
    )
  }

  return (
    <Link to={to} className={`${styles.container} ${className}`}>
      <span className={`${styles.container} ${styles.button} ${buttonKindStyle} ${styles.linkAnchor}`}>
        {label}
      </span>
    </Link>
  )
}

export default Button
