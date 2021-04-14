import { graphql, useStaticQuery } from 'gatsby'

const teamsQuery = graphql`{
    teams: allTeamsYaml(sort: {fields: name}) {
        edges {
            node {
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
                fields {
                    path
                }
            }
        }
    }
}`

export const useTeams = () => {
    const { teams } = useStaticQuery(teamsQuery)
    return teams.edges.map(({ node }) => node)
}
