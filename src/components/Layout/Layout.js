import * as React from 'react'

import './global.css'
import * as styles from './layout.module.css'

function Layout(props) {
  const { children } = props

  return (
    <main className={styles.container}>
      {children}
    </main>
  )
}

export default Layout
