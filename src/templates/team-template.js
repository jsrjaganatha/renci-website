import React, { Fragment } from 'react'
import { SEO } from '../components/seo'
import { graphql } from 'gatsby'
import { Container, Article, Section, Hero } from '../components/layout'
import { Title, Paragraph } from '../components/typography'
import { PeopleList } from '../components/people'

export default ({ data, pageContext }) => {
  const { teamsYaml: {
    name,
    blurb,
    description,
    members,
    featuredImage
  }} = data
  
  return (
    <Fragment>
      <SEO title={ name } />

      <Hero backgroundImage={ featuredImage && featuredImage.childImageSharp.fluid }>
        <Title>{ name }</Title>
        <p>
          { blurb }
        </p>
      </Hero>

      <Container>
        <Section title="Team Details">
          <Article title="Description">
            <div dangerouslySetInnerHTML={{ __html: description }} />
          </Article>
        </Section>

        <Section title="Team Members">
          <Article>
            <PeopleList members={ members } />
          </Article>
        </Section>

      </Container>
    </Fragment>
  )
}

export const teamQuery = graphql`
  query($id: String!) {
    teamsYaml( id: { eq: $id }) {
      name
      blurb
      description
      members {
        id
        fullName
        name {
          first
          last
        }
        title
        fields {
          path
        }
        photo {
          childImageSharp {
            fixed(width: 350, height: 350) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    }
  }
`