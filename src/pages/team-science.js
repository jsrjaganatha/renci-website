import React from 'react'
import { SEO } from '../components/seo'
import { Container } from '../components/layout'
import { Title } from '../components/typography'
import { CollaborationsNetwork } from '../components/viz'

const TeamSciencePage = () => {
  return (
    <Container>
      <SEO title="Team Science at RENCI" />
  
      <br />
      <Title>Team Science at RENCI</Title>
      <br />

      <CollaborationsNetwork width={ 950 } height={ 600 } />

    </Container>
  )
}

export default TeamSciencePage
