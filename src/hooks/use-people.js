import { graphql, useStaticQuery } from 'gatsby'

export const personFragment = graphql`
  fragment PersonDetails on PeopleYaml {
    id
    name {
      first
      last
    }
    fullName
    title
    email
    phone
    photo {
      childImageSharp {
        fixed(width: 200, height: 200) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    fields {
      path
    }

  }
`

const peopleQuery = graphql`{
  staff: allPeopleYaml(sort: {fields: [name___last, name___first]}) {
    edges {
      node {
        ...PersonDetails
      }
    }
  }
  ood: allPeopleYaml(filter: {teams: {elemMatch: {id: {eq: "ood"}}}}, sort: {fields: name___last, order: ASC}) {
    edges {
      node {
        ...PersonDetails
      }
    }
  }
}`

export const usePeople = () => {
  const { staff, ood, management, chiefscientists } = useStaticQuery(peopleQuery)
  return {
    staff: staff.edges.map(({ node }) => node),
    ood: ood.edges.map(({ node }) => node),
  }
}
