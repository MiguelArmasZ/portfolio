import React from 'react'

export const Text = ({ children, class$ }) => {
  return <p className={class$}>{children}</p>
}
