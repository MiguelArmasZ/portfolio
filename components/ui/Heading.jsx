import React from 'react'

export const Heading = ({ children, class$ = 'heading' }) => {
  return <h2 className={class$}>{children}</h2>
}
