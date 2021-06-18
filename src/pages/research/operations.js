import React, { Fragment } from 'react'
import { SEO } from '../../components/seo'
import { Container, Hero } from '../../components/layout'
import { Title, Paragraph } from '../../components/typography'
import { useTeams } from '../../hooks'

const OperationsPage = () => {
  const teams = useTeams()

  return (
    <Fragment>
      <SEO title="Operations Teams at RENCI" />

      <Hero>
        <Title>Operations Teams</Title>
        <Paragraph>
          Computer dissident hotdog boy courier Tokyo-space neon San Francisco knife. Into towards shoes military-grade dolphin tattoo warehouse. Human footage city knife kanji assault sensory post-BASE jump. 
        </Paragraph>
      </Hero>

    </Fragment>
  )
}

export default OperationsPage
