import React from 'react'
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
`)

const SpotlightItem = styled.div(({ theme }) => `
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 300px;
  text-align: center;
  padding: ${ theme.spacing.medium };
  background-color: #00000011;
  min-height: 400px;
`)

export const ProjectSpotlight = () => {
  const projects = useProjects()
  let selectedProjects = []
  const indices = [...Array(3).keys()].map(num => Math.floor(Math.random() * projects.length))
  indices.forEach(index => selectedProjects.push(projects[index]))

  return (
    <Wrapper>
      {
        selectedProjects.map(project => (
          <SpotlightItem>
            { project.name }
          </SpotlightItem>
        ))
      }
    </Wrapper>
  )
}
