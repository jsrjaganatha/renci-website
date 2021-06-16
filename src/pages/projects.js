import React, { useEffect } from "react"
import { SEO } from '../components/seo'
import { useProjects } from '../hooks'
import { Container, Section } from '../components/layout'
import { Title } from '../components/typography'
import { Link } from '../components/link'
import { DataTable } from '../components/data-table'
import { Icon } from '../components/icon'
import { theme } from '../theme'

const projectColumns = [
  {
    name: 'Name',
    selector: 'name',
    type: 'string',
    sortable: true,
    sortFunction: (p, q) => p.name.toLowerCase() < q.name.toLowerCase() ? -1 : 1,
  },
  {
    name: 'Group/Collaboration',
    selector: row => row.group ? row.group[0].name : row.collaboration ? row.collaboration[0].name : 'N/A',
    type: 'string',
    sortable: true,
    sortFunction: (p, q) => p.name.toLowerCase() < q.name.toLowerCase() ? -1 : 1,
  },
  {
    name: 'Link',
    selector: row => row.fields.path,
    type: 'string',
    cell: row => <Link to={ row.fields.path }><Icon icon="link" fill={ theme.color.primary.main }/></Link>
  },
]

//

const ProjectsPage = () => {
  const projects = useProjects()

  return (
    <Container>
      <SEO title="RENCI Projects" />
      
      <br />
      <Title>Projects</Title>
      <br />
      
      <Section title="" fullWidth>
        <DataTable data={ projects } columns={ projectColumns }/>
      </Section>

    </Container>
  )
}

export default ProjectsPage
