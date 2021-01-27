import React, { Fragment } from 'react'
import { graphql, Link } from 'gatsby'
import { navigate, useLocation } from '@reach/router'
import { Container, Hero, HorizontalRule, Section } from '../components/layout'
import { Meta, Title, Subtitle } from '../components/typography'
import { ArrowLink } from '../components/link'
import { Tag, Tags } from '../components/news/tag'
import { Label } from '../components/news/label'
import { NewsDate } from '../components/news/news-date'

const PreviousArticleLink = ({ title, path }) => (
  <Fragment>
    <ArrowLink to={ path } text="PREVIOUS ARTICLE" arrowPlacement="left" />
    <Meta style={{ paddingLeft: '1rem' }}>{ title }</Meta>
  </Fragment>
)

const filtersUrl = (params, basePath = '/news') => {
  if (Object.values(params).join('') === '')
    return basePath
  const q = Object.keys(params)
    .filter(key => params[key] !== '')
    .map(key => `${ key }=${ params[key] }`).join('&')
  return basePath + '?' + q
}

const NextArticleLink = ({ title, path }) => (
  <Fragment>
    <ArrowLink to={ path } text="NEXT ARTICLE" arrowPlacement="right" />
    <Meta style={{ paddingLeft: '1rem' }}>{ title }</Meta>
  </Fragment>
)

export default ({ data, pageContext }) => {
  const location = useLocation()
  const { article: {
    frontmatter: {
      title, subtitle, publishDate, author, featuredImage,
      people, groups, projects, teams, collaborations, organizations, tags
    },
    fields,
    html: articleHTML
  }} = data
  const { prevArticle, nextArticle } = pageContext
  // collect all related objects
  const articleTags = groups
    .concat(collaborations)
    .concat(projects)
    .concat(organizations)
    .concat(teams)
    .concat(people)
    // remove null items
    .filter(item => item !== null)
    // turn into array of objects with shape { id, name, path }
    .map(item => {
      switch (item.__typename) {
        case 'PeopleYaml':
          return ({ id: item.id, name: item.fullName, path: item.fields.path })
        case 'OrganizationsYaml':
          return ({ id: item.id, name: item.name, path: item.url })
        default:
          return ({ id: item.id, name: item.name, path: item.fields.path })
      }
    })
    .concat(tags.map((item, i) => ({ id: item.id, name: item.name, path: filtersUrl({ topic: item.id }) })))
    // alphabetize
    .sort((t, u) => t.name < u.name ? -1 : 1)

  return (
    <Fragment>
      { featuredImage && <Hero backgroundImage={ featuredImage && featuredImage.childImageSharp.fluid } /> }

      <Container>
        <Section>
          <NewsDate>{ publishDate }</NewsDate>

          <Label style={{ float: 'right' }} className={ fields.newsType }>{ fields.newsType }</Label>

          <Title>{ title }</Title>

          {
            subtitle && (
              <Fragment>
                <Subtitle>{ subtitle }</Subtitle>
              </Fragment>
            )
          }

          <br />

          <Meta>
            Published on { publishDate } <br />
            { author && <span>Author: <Link to={ `/people/${ author.id }` }>{ author.fullName }</Link></span> }
          </Meta>

          <br />
          
          <Tags>
            { articleTags.map(tag => <Tag link to={ tag.path } key={ tag.path }>{ tag.name }</Tag>) }
          </Tags>

          <HorizontalRule />
          <br />

          <div dangerouslySetInnerHTML={{ __html: articleHTML }} />
        </Section>

        <HorizontalRule />

        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', padding: '1rem 0' }}>
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start' }}>
            { prevArticle && <PreviousArticleLink title={ prevArticle.frontmatter.title } path={ prevArticle.fields.path } /> }
          </div>
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-end' }}>
            { nextArticle && <NextArticleLink title={ nextArticle.frontmatter.title } path={ nextArticle.fields.path } /> }
          </div>
        </div>
      </Container>
    </Fragment>
  )
}

export const newsQuery = graphql`
  query($slug: String!) {
    article: markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      frontmatter {
        title
        subtitle
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
        publishDate(formatString: "MMMM D, YYYY")
        author {
          id
          fullName
          fields {
            path
          }
        }
        people {
          id
          __typename
          fullName
          fields {
            path
          }
        }
        groups {
          id
          __typename
          name
          fields {
            path
          }
        }
        projects {
          id
          __typename
          name
          fields {
            path
          }
        }
        teams {
          id
          __typename
          name
          fields {
            path
          }
        }
        collaborations {
          id
          __typename
          name
          fields {
            path
          }
        }
        organizations {
          id
          __typename
          name
          url
        }
        tags {
          id
          name
        }
      }
      fields {
        path
        newsType
      }
      html
    }
  }
`
