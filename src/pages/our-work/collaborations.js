import React from 'react'
import { SEO } from '../../components/seo'
import { Container, Section } from '../../components/layout'
import { Title, Paragraph } from '../../components/typography'
import { useCollaborations } from '../../hooks'

const CollaborationsPage = () => {
  const collaborations = useCollaborations()

  return (
    <Container>
      <SEO title="About Collaborations at RENCI" />

      <br />
      <Title>About Our Collaborations</Title>
      <br />

      <Section>
        <Paragraph>
          Cardboard systemic sunglasses numinous table nano-corporation systema narrative ablative BASE jump fetishism. Pen faded media bridge systemic neon DIY plastic monofilament bomb voodoo god. Market saturation point BASE jump pre-knife artisanal office tube construct-space narrative shanty town drugs nodal point realism long-chain hydrocarbons faded. Garage tanto order-flow otaku numinous artisanal monofilament vinyl sub-orbital boy gang cartel San Francisco. 
        </Paragraph>
      </Section>
    </Container>
  )
}

export default CollaborationsPage
