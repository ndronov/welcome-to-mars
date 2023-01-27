import React, { useEffect, useState } from 'react'

import { AUTO_CLOSE_TIMEOUT } from './logic'

import * as styles from './toast.module.css'

export function Toast(props) {
  const { message, kind, hide, onHide } = props
  const [visible, setVisible] = useState(false)

  const toastKindStyle = styles[`toast_${kind}`] ?? styles[`toast_default`]
  const toastVisibilityStyle = visible ? styles.toast_visible : styles.toast_hidden

  useEffect(() => {
    requestAnimationFrame(
      () => setVisible(true)
    )

    setTimeout(() => {
      setVisible(false)

      hide(onHide)
    }, AUTO_CLOSE_TIMEOUT)
  }, [])

  return (
    <div className={`${styles.toast} ${toastKindStyle} ${toastVisibilityStyle}`}>
      {message}
    </div>
  )
}
