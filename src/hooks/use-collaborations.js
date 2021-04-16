import { graphql, useStaticQuery } from 'gatsby'

const collaborationsQuery = graphql`{
  collaborations: allCollaborationsYaml(sort: {fields: id}) {
    nodes {
      id
      name
      description
      members {
        id
        name {
          first
          last
        }
        email
        title
      }
      projects {
        id
        name
        description
      }
      www
      fields {
        path
      }
    }
  }
}`

export const useCollaborations = () => {
  const { collaborations } = useStaticQuery(collaborationsQuery)
  return collaborations.nodes
}
