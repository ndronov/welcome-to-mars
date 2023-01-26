import * as React from 'react'

function Seo(props) {
  const { title, children } = props

  return (
    <>
      <title>{title}</title>
      {children}
    </>
  )
}

export default Seo
