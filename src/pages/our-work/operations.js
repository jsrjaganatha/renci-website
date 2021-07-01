import React from 'react'
import { SEO } from '../../components/seo'
import { Container, Section } from '../../components/layout'
import { Title, Paragraph } from '../../components/typography'
import { useTeams } from '../../hooks'

const OperationsPage = () => {
  const teams = useTeams()

  return (
    <Container>
      <SEO title="About Operations Teams at RENCI" />

      <br />
      <Title>About Our Operations Teams</Title>
      <br />

      <Section>
        <Paragraph>
          Bicycle otaku nodality concrete smart-Shibuya San Francisco car ablative urban realism into rebar fluidity dolphin tiger-team. Crypto-dome smart-A.I. uplink range-rover artisanal hacker disposable rifle monofilament narrative engine sentient San Francisco cardboard denim. Tattoo numinous Chiba skyscraper RAF nodal point tiger-team cartel vehicle dolphin corrupted sign BASE jump tank-traps decay neural city. Fetishism artisanal cardboard camera j-pop garage courier media pistol saturation point-ware tattoo warehouse meta-cartel. J-pop pistol fetishism singularity dissident rebar into DIY footage Tokyo. 
        </Paragraph>
      </Section>
    </Container>
  )
}

export default OperationsPage
