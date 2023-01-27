import React from 'react'

import './global.css'
import * as styles from './layout.module.css'

export function Layout(props) {
  const { children } = props

  return (
    <main className={styles.container}>
      {children}
    </main>
  )
}
