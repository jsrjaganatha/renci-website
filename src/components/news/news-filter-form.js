import React, { useEffect, useMemo, useState } from 'react'
import styled, { useTheme } from 'styled-components'
import { navigate } from '@reach/router'
import { useFormState } from 'react-use-form-state'
import { Select } from '../form'
import { useCollaborations, useGroups, useProjects, useTags } from '../../hooks'
import { useNewsContext } from './news-context'
import { Button } from '../../components/buttons'
import { Icon } from '../../components/icon'
import { animated, useTransition } from 'react-spring'
import { filtersUrl } from './utils'

const Wrapper = styled.div(({ theme }) => `
  padding: ${ theme.spacing.large } 0 ${ theme.spacing.extraLarge } 0;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  position: relative;
`)

const Selects = styled.div(({ theme }) => `
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: ${ theme.spacing.medium };
  & > select {
    flex: 1;
    width: 100%;
  }
  @media (min-width: 992px) {
    flex-direction: row;
    & > select {
      flex: 1;
      width: 33%;
    }
  }
  & > *:first-child { margin: 0 0 ${ theme.spacing.medium } 0; }
  & > *:last-child { margin: ${ theme.spacing.medium } 0 0 0; }
  @media (min-width: 992px) {
    flex-direction: row;
    & > *:first-child { margin: 0 ${ theme.spacing.medium } 0 0; }
    & > *:last-child { margin: 0 0 0 ${ theme.spacing.medium }; }
  }
`)

const FilterSelect = styled(Select)(({ theme, value }) => `
  color: ${ value === '' ? theme.color.black : theme.color.renciBlue };
`)

const ClearButton = styled(Button).attrs({ small: true })(({ theme }) => `
  position: absolute;
  right: 0;
  bottom: 0;
  background-color: transparent;
  color: ${ theme.color.extended.contessa };
  font-size: 80%;
  filter: brightness(1.1);
  &:hover {
    filter: brightness(1.0);
  }
  gap: ${ theme.spacing.extraSmall };
`)

export const NewsFilterForm = () => {
  const theme = useTheme()
  const { filters, changeFilterSelect, clearFilters } = useNewsContext()
  const groups = useGroups()
  const collaborations = useCollaborations()
  const [groupsAndCollaborations, ] = useState([...groups, ...collaborations])
  const projects = useProjects()
  const tags = useTags()
  const [groupOptions, setGroupOptions] = useState([])
  const [projectOptions, setProjectOptions] = useState([])
  const [topicOptions, setTopicOptions] = useState([])
  const [, { select }] = useFormState()

  // memoized value indicating if filters are being used
  // recalculated when filters change
  const usingFilters = useMemo(() => (filters.group || filters.project || filters.topic), [filters])

  // on the first render,
  useEffect(() => {
    // set the filter options
    setGroupOptions(groupsAndCollaborations.map(group => ({ value: group.id, label: group.name })).sort((g, h) => g.label.toLowerCase() < h.label.toLowerCase() ? -1 : 1))
    setProjectOptions(projects.map(project => ({ value: project.id, label: project.name })).sort((p, q) => p.label.toLowerCase() < q.label.toLowerCase() ? -1 : 1))
    setTopicOptions(tags.map(tag => ({ value: tag.id, label: tag.name })).sort((t, s) => t.label.toLowerCase() < s.label.toLowerCase() ? -1 : 1))
  }, [])

  // when filters.group changes,
  useEffect(() => {
    // update the project options accordingly.
    const index = groupsAndCollaborations.findIndex(group => group.id === filters.group)
    const filteredProjects = index > -1
      ? groupsAndCollaborations[index].projects
        ? groupsAndCollaborations[index].projects
        : [] 
      : projects
    setProjectOptions(filteredProjects.map(project => ({ value: project.id, label: project.name })))
  }, [filters.group])

  // what to do when filters.project is changed?
  // useEffect(() => {
  // }, [filters.project])

  // this defines the animation for the CLEAR FILTERS button
  const transitions = useTransition(usingFilters, null, {
    from: { opacity: 0.0 },
    enter: { opacity: 1.0 },
    leave: { opacity: 0.0 },
  })

  return (
    <Wrapper>
      <Selects>
        <FilterSelect
          { ...select('group') }
          options={ [{ value: '', label: `Select Group` }].concat(groupOptions) }
          onChange={ changeFilterSelect('group') }
          value={ filters.group }
        />
        <FilterSelect
          { ...select('project') }
          options={ [{ value: '', label: `Select Project` }].concat(projectOptions) }
          onChange={ changeFilterSelect('project') }
          value={ filters.project }
        />
        <FilterSelect
          { ...select('topic') }
          options={ [{ value: '', label: `Select Topic` }].concat(topicOptions) }
          onChange={ changeFilterSelect('topic') }
          value={ filters.topic }
        />
      </Selects>
      {
        transitions.map(({ item, key, props }) => item && (
          <animated.div key={ key } style={ props }>
            <ClearButton onClick={ clearFilters }><Icon icon="cancel" size={ 14 } fill={ theme.color.extended.contessa } />Clear Filters</ClearButton>
          </animated.div>
        ))
      }
    </Wrapper>
  )
}
