import React from 'react'
import styled from 'styled-components'
import { MiniProfile } from '../people'
import { useAvatar } from '../../hooks'

const Wrapper = styled.div(({ theme }) => `
  display: flex;
  flex-wrap: wrap;
  margin: ${ theme.spacing.medium } 0;
  & > * {
    margin-right: ${ theme.spacing.medium };
    margin-bottom: ${ theme.spacing.medium };
  }
`)

export const PeopleList = ({ members }) => {
  const avatar = useAvatar()
  return (
    <Wrapper>
      {
        members.map(person => {
          console.log(person)
          const photo = person.photo ? person.photo.childImageSharp.fixed : avatar.childImageSharp.fixed
          return (
            <MiniProfile
              anchorId={ person.id }
              key={ person.id }
              name={ person.fullName }
              descriptor={ person.role }
              photo={ photo }
              path={ person.fields.path }
            />
          )
        })
      }
    </Wrapper>
  )
}
