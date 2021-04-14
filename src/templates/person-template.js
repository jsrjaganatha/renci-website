import React from 'react'
import { SEO } from '../components/seo'
import { graphql } from 'gatsby'
import { Container, Section } from '../components/layout'
import { Paragraph } from '../components/typography'
import { ArrowLink } from '../components/link'
import { Profile } from '../components/people'
import { useAvatar } from '../hooks'
import { List } from '../components/list'

export default ({ data, pageContext }) => {
  const {
    peopleYaml: {
      fullName,
      photo,
      title,
      email,
      phone,
      www,
      bio,
      groups,
      collaborations,
      projects,
      teams,
    }
  } = data
  const avatar = useAvatar()
  const contributions = [].concat(groups || [], collaborations || [], teams || [], projects || [])
    .sort((a, b) => a.name.toLowerCase() < b.name.toLowerCase() ? -1 : 1)

  return (
    <Container>
      <SEO title={ fullName } />

      <Profile
        name={ fullName }
        title={ title }
        email={ email }
        phone={ phone }
        www={ www }
        bio={ bio }
        photo={ photo ? photo.childImageSharp.fixed : avatar.childImageSharp.fixed }
      />

      <Section title="Contributions">
        { contributions && <List items={ contributions.map(contribution => <ArrowLink key={ contribution.id } to={ contribution.fields.path } text={ contribution.name } />) } /> }
      </Section>

      {
        bio && (
          <Section title="About">
            <Paragraph dangerouslySetInnerHTML={{ __html: bio }} />
          </Section>
        )
      }

    </Container>
  )
}

export const personQuery = graphql`
  query($id: String!) {
    peopleYaml( id: { eq: $id }) {
      id
      fullName
      title
      email
      phone
      photo {
        childImageSharp {
          fixed(width: 350, height: 350) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      www
      bio
      teams {
        id
        name
        fields {
          path
        }
      }
      groups {
        id
        name
        fields {
          path
        }
      }
      collaborations {
        id
        name
        fields {
          path
        }
      }
      projects {
        id
        name
        fields {
          path
        }
      }
    }
  }
`