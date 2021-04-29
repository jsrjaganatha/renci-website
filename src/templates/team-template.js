import React, { Fragment } from 'react'
import { SEO } from '../components/seo'
import { graphql } from 'gatsby'
import { Container, Article, Section, Hero } from '../components/layout'
import { Title, Paragraph } from '../components/typography'
import { PeopleList } from '../components/people'

export default ({ data, pageContext }) => {
  const { teamsYaml: {
    name,
    role,
    description,
    members,
    featuredImage
  }} = data
  
  return (
    <Fragment>
      <SEO title={ name } />

      <Hero backgroundImage={ featuredImage && featuredImage.childImageSharp.fluid }>
        <Title>{ name }</Title>
        <Paragraph>{ description }</Paragraph>
      </Hero>

      <Container>
        <Section title="Team Members">
          <Article>
            <PeopleList members={ members.sort((p, q) => p.name.last > q.name.last ? 1 : -1) } />
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
      description
      featuredImage {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      members {
        id
        fullName
        role
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