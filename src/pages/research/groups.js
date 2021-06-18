import React, { Fragment } from 'react'
import { SEO } from '../../components/seo'
import { Container, Section, Hero, Article } from '../../components/layout'
import { Title, Paragraph } from '../../components/typography'
import { ArrowLink } from '../../components/link'
import { useCollaborations, useGroups } from '../../hooks'

const ResearchGroupsPage = () => {
  const groups = useGroups()

  return (
    <Fragment>
      <SEO title="Research Groups at RENCI" />

      <Hero>
        <Title>Research Groups</Title>
        <Paragraph>
          Cardboard rifle weathered vinyl man neural urban wonton soup systema rebar apophenia alcohol-space. Media tube carbon plastic bomb pen realism free-market motion-ware decay futurity. Kowloon 8-bit tattoo neural gang dolphin tank-traps drugs tower RAF media. Computer refrigerator industrial grade drugs shoes carbon knife uplink. Render-farm drone rifle uplink post-realism shrine neural tank-traps bicycle chrome film industrial grade papier-mache assault plastic. Man drone skyscraper concrete computer bicycle cardboard network warehouse advert marketing girl-ware corrupted convenience store. High-level view of research at RENCI.
        </Paragraph>
      </Hero>

    </Fragment>
  )
}

export default ResearchGroupsPage
