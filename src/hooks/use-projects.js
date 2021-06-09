import { graphql, useStaticQuery } from 'gatsby'

const projectsQuery = graphql`{
  projects: allProjectsYaml(sort: {fields: name}) {
    nodes {
      id
      name
      description
      www
      fields {
        path
      }
      group {
        id
        name
      }
    }
  }
}`

export const useProjects = () => {
  const { projects } = useStaticQuery(projectsQuery)
  return projects.nodes
}
