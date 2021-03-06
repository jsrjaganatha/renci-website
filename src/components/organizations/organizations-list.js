import React from 'react'
import { List } from '../list'

export const OrganizationsList = ({ contributors, ...props }) => {
  return (
    <List items={
        contributors.map(({ name, url }) => (
          <a key={ url } href={ url } target="_blank" rel="noopener noreferrer">{ name }</a>
        ))
      }
      { ...props }
    />
  )
}
