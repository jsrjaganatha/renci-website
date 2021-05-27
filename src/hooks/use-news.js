import { graphql, useStaticQuery } from 'gatsby'

const newsQuery = graphql`{
  features: allMarkdownRemark(
    filter: {fileAbsolutePath: {regex: "/content\/news\/features/"}},
    sort: {fields: frontmatter___publishDate, order: DESC}
  ) {
    nodes {
      id
      fileAbsolutePath
      frontmatter {
        title
        slug
        spotlight
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
          name {
            first
            last
          }
        }
        groups {
          id
        }
        collaborations {
          id
        }
        projects {
          id
        }
        tags {
          id
        }
      }
      fields {
        path
        newsType
      }
      excerpt(pruneLength: 500)
    }
  }
  blog: allMarkdownRemark(
    filter: {fileAbsolutePath: {regex: "/content\/news\/blog/"}},
    sort: {fields: frontmatter___publishDate, order: DESC}
  ) {
    nodes {
      id
      fileAbsolutePath
      frontmatter {
        title
        slug
        spotlight
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
          name {
            first
            last
          }
        }
        groups {
          id
        }
        collaborations {
          id
        }
        projects {
          id
        }
      }
      fields {
        path
        newsType
      }
      html
      excerpt(pruneLength: 500)
    }
  }
  spotlightSlugs: allNewsSpotlightYaml {
    nodes {
      slug
    }
  }
}`

export const useNews = () => {
  const news = useStaticQuery(newsQuery)
  const spotlightSlugs = news.spotlightSlugs.nodes.map(node => node.slug)

  const features = news.features.nodes.map(node => {
    // read date from the file path, and set client route
    const matches = node.fileAbsolutePath.match(/content\/news\/features\/(\d{4})\/(\d{2})\/.+\/index.md$/)
    if (matches) {
      const [, yyyy, dd] = matches
      const path = `/news/${ yyyy }/${ dd }/${ node.frontmatter.slug }`
      node.path = path
    }
    return node
  })

  const blog = news.blog.nodes.map(node => {
    // read date from the file path, and set client route
    const matches = node.fileAbsolutePath.match(/content\/news\/blog\/(\d{4})\/(\d{2})\/.+\/index.md$/)
    if (matches) {
      const [, yyyy, dd] = matches
      const path = `/blog/${ yyyy }/${ dd }/${ node.frontmatter.slug }`
      node.path = path
    }
    return node
  })

  const articles = [...features, ...blog]
  const sortedArticles = articles
    .sort((a, b) => {
      const aDate = Date(a.frontmatter.publishDate)
      const bDate = Date(b.frontmatter.publishDate)
      return aDate < bDate ? -1 : 1
    })

  const latest = sortedArticles
    .sort((a, b) => spotlightSlugs.includes(a.frontmatter.slug) && !spotlightSlugs.includes(b.frontmatter.slug) ? -1 : 1)
    .slice(0,3)

  return { articles: sortedArticles, latest }
}
