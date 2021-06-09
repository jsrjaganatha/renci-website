import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { useProjects } from '../../hooks'

const Wrapper = styled.div(({ theme }) => `
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: ${ theme.spacing.medium };
  width: 100%;
  max-width: 1200px;
  @media (min-width: 992px) {
    flex-direction: row;
  }
  & .project {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: ${ theme.spacing.medium };
    background-color: #00000011;
    min-height: 300px;
    @media (min-width: 992px) {
      min-height: 400px;
      flex-direction: row;
    }
  }
`)

export const ProjectSpotlight = () => {
  const projects = useProjects()
  const [selectedProjects, setSelectedProjects] = useState([])

  useEffect(() => {
    // select three random project indices
    let projectsCopy = [...projects]
    let projectSelection = []
    for (let i = 0; i < 3; i += 1) {
      const randomIndex = Math.floor(Math.random() * projectsCopy.length)
      const randomProject = projectsCopy.splice(randomIndex, 1)[0]
      projectSelection.push(randomProject)
    }
    // map those indices to projects
    setSelectedProjects(projectSelection)
  }, [])
  

  return (
    <Wrapper className="project-spotlight">
      {
        selectedProjects && selectedProjects.map(project => (
          <div className="project">
            { project.name }
            <hr />
            { project.group ? project.group.name : null }
            { project.collaboration ? project.collaboration.name : null }
          </div>
        ))
      }
    </Wrapper>
  )
}
