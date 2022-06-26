import React from 'react'
import { Icon } from './'

export const SocialIcon = ({ icon, href }) => {
  return (
    <a
      target='_black'
      rel='noreferrer noopener'
      href={href}
      className='social-icon'
    >
      <Icon icon={icon} />
    </a>
  )
}
