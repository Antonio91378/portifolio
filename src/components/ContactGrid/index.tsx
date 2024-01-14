import React from 'react'
import {
  ContactGridContainer,
  ContactItemContainer,
  ContactItemIcon,
  ContactItemTitle
} from './style'

interface ContactItemProps {
  contact: string
  title?: string
  link: string
}

export const ContactItem: React.FC<ContactItemProps> = ({
  contact,
  title,
  link
}) => {
  const onContactPress = () => {
    window.open(link, `_ blank`)
  }

  return (
    <ContactItemContainer onClick={onContactPress}>
      <ContactItemIcon>
        <img src={`/contacts/${contact}.svg`} alt={contact} />
      </ContactItemIcon>
      <ContactItemTitle>{title || contact}</ContactItemTitle>
    </ContactItemContainer>
  )
}

const ContactGrid: React.FC = () => (
  <ContactGridContainer>
    <ContactItem
      title="WhatsApp"
      contact="whatsapp"
      link="https://api.whatsapp.com/send?phone=5538998115366"
    />
    <ContactItem
      title="LinkedIn"
      contact="linkedin"
      link="https://www.linkedin.com/in/ant%C3%B4nio-dias-5a3a2a22a/"
    />
    <ContactItem
      title="GitHub"
      contact="github"
      link="https://github.com/Antonio91378"
    />
  </ContactGridContainer>
)

export default ContactGrid
