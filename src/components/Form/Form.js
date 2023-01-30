import React from "react"

import * as styles from "./form.module.css"

export function Form(props) {
  const { children, title, onSubmit } = props

  return (
    <form className={styles.form} onSubmit={onSubmit} noValidate>
      <h1 className={styles.title}>{title}</h1>
      {children}
    </form>
  )
}
