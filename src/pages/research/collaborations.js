import React, { Fragment } from 'react'
import { SEO } from '../../components/seo'
import { Container, Hero } from '../../components/layout'
import { Title, Paragraph } from '../../components/typography'
import { useCollaborations } from '../../hooks'

const ResearchGroupsPage = () => {
  const collaborations = useCollaborations()

  return (
    <Fragment>
      <SEO title="Research Collaborations at RENCI" />

      <Hero>
        <Title>Research Collaborations</Title>
        <Paragraph>
          Cardboard systemic sunglasses numinous table nano-corporation systema narrative ablative BASE jump fetishism. Pen faded media bridge systemic neon DIY plastic monofilament bomb voodoo god. Market saturation point BASE jump pre-knife artisanal office tube construct-space narrative shanty town drugs nodal point realism long-chain hydrocarbons faded. Garage tanto order-flow otaku numinous artisanal monofilament vinyl sub-orbital boy gang cartel San Francisco. 
        </Paragraph>
      </Hero>

    </Fragment>
  )
}

export default ResearchGroupsPage
