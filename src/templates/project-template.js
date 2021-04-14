import React, { Fragment } from 'react'
import { SEO } from '../components/seo'
import { graphql } from 'gatsby'
import { Container, Article, Section, Hero } from '../components/layout'
import { Title } from '../components/typography'
import { LinkTray } from '../components/link'
import { NewsList } from '../components/news'
import { PeopleList } from '../components/people'
import { OrganizationsList } from '../components/organizations'
import { Link } from '../components/link'

export default ({ data, pageContext }) => {
  const { projectsYaml: {
    name,
    description,
    renciRole,
    featuredImage,
    group,
    members,
    partners,
    funding,
    www,
    news,
  }} = data

  const sortedPartners = partners ? [...partners].sort((p, q) => p.name > q.name ? 1 : -1) : null
  const sortedFunders = funding ? [...funding].sort((f, g) => f.name > g.name ? 1 : -1) : null
  const sortedMembers = members ? [...members].sort((f, g) => f.name.last > g.name.last ? 1 : -1) : null
  const sortedNews = news ? [...news].sort((a, b) => new Date(b.frontmatter.publishDate) - new Date(a.frontmatter.publishDate)) : null
  
  return (
    <Fragment>
      <SEO title={ name } />

      <Hero backgroundImage={ featuredImage && featuredImage.childImageSharp.fluid }>
        { group && group[0] && <Link to={ group[0].fields.path }>{ group[0].name }</Link> }
        <Title>{ name }</Title>
        <div dangerouslySetInnerHTML={{ __html: description }} />
      </Hero>

      <Container>
        <LinkTray urls={ www } />
        
        {
          sortedNews && (
            <Section title="News">
              <NewsList articles={ news.slice(0, 2) } />
            </Section>
          )
        }

        <Section title="RENCI's Role">
          <Article>
            <div dangerouslySetInnerHTML={{ __html: renciRole }} />
          </Article>
        </Section>

        <Section title="Contributors">
          { sortedMembers && <Article title="RENCI Team"><PeopleList members={ sortedMembers } /></Article> }
          { sortedPartners && <Article title="Partners"><OrganizationsList contributors={ sortedPartners } /></Article> }
          { sortedFunders && <Article title="Funding"><OrganizationsList contributors={ sortedFunders } /></Article> }
        </Section>

      </Container>
    </Fragment>
  )
}

export const projectQuery = graphql`
  query($id: String!) {
    projectsYaml( id: { eq: $id }) {
      name
      description
      renciRole
      featuredImage {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      group {
        id
        name
        fields {
          path
        }
      }
      www
      members {
        id
        name {
          first
          last
        }
        fullName
        role
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
      partners {
        id
        name
        url
      }
      funding {
        id
        name
        url
      }
      news {
        id
        fields {
          path
          newsType
        }
        frontmatter {
          title
          publishDate(formatString: "MMMM DD, YYYY")
          featuredImage {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
          previewImage {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        excerpt(pruneLength: 500)
      }
    }
  }
`