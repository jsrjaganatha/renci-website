import React from 'react'
import { SEO } from '../../components/seo'
import { Container, Section } from '../../components/layout'
import { Title, Paragraph } from '../../components/typography'
import { useGroups } from '../../hooks'

const GroupsPage = () => {
  const groups = useGroups()

  return (
    <Container>
      <SEO title="About Research Groups at RENCI" />

      <br />
      <Title>About Our Research Groups</Title>
      <br />

      <Section>
        <Paragraph>
          Numinous ablative order-flow convenience store tube claymore mine tank-traps voodoo god vinyl. Sensory-ware papier-mache crypto-savant vinyl construct warehouse cyber-hacker drone. Assault lights sunglasses chrome sentient man range-rover refrigerator plastic cyber-weathered order-flow. Fetishism assassin smart-industrial grade tanto plastic sign. Numinous into neural sentient Tokyo euro-pop Shibuya. Warehouse courier office youtube network dome narrative bicycle refrigerator meta-pen euro-pop geodesic BASE jump. Vehicle 8-bit refrigerator math-garage faded tattoo katana shrine receding systema urban. Neural Chiba bomb decay savant beef noodles woman alcohol numinous monofilament-space wristwatch. 
        </Paragraph>
      </Section>
    </Container>
  )
}

export default GroupsPage
