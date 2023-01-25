import * as React from 'react'

import * as styles from '../components/index.module.css'
import './layout.css'

// TODO move style main to layout ?

function Layout(props) {
  const { children } = props

  return (
    <main className={styles.main}>
      {children}
    </main>
  )
}

export default Layout
