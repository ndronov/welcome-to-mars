import React from "react"
import { Link } from "gatsby"

import * as styles from "./button.module.css"

export function Button(props) {
  const {
    className = "",
    disabled,
    kind = "default",
    label,
    onClick,
    to,
    type = "button",
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
      <span
        className={`${styles.container} ${styles.button} ${buttonKindStyle} ${styles.linkAnchor}`}
      >
        {label}
      </span>
    </Link>
  )
}
