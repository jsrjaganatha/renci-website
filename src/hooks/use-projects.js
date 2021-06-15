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
  return projects.nodes.sort((p, q) => p.name.toLowerCase() < q.name.toLowerCase() ? -1 : 1)
}
