import React from 'react'

export function Seo(props) {
  const { title, children } = props

  return (
    <>
      <title>{title}</title>
      {children}
    </>
  )
}
