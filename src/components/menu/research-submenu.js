import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Container as Grid, Row, Col } from 'react-grid-system'
import { Heading } from '../../components/typography'
import { useCollaborations, useGroups, useTeams } from '../../hooks'
import { ArrowLink } from '../../components/link'
import { animated, useSprings } from 'react-spring'

const NavColumn = styled(animated.div)`
  padding: 1rem;
  & ul {
    list-style-type: none;
    margin: 0;
    & > li {
      padding: 0;
      margin: 5px 0;
    }
  }
  & ${ Heading } {
    font-size: 150%;
  }
`

export const ResearchSubmenu = ({ onLinkClick }) => {
  const groups = useGroups()
  const collaborations = useCollaborations()
  const teams = useTeams()

  const columns = [
    <Fragment>
      <Heading>Research Groups</Heading>
      <ul>
        {
          groups.map((group, i) => (
            <li onClick={ onLinkClick } key={ group.id }>
              <ArrowLink to={ group.fields.path } text={ group.name } />
            </li>
          ))
        }
      </ul>
    </Fragment>,
    <Fragment>
      <Heading>Collaborations</Heading>
      <ul>
        {
          collaborations.map((collaboration, i) => (
            <li onClick={ onLinkClick } key={ collaboration.id }>
              <ArrowLink to={ collaboration.fields.path } text={ collaboration.name } />
            </li>
          ))
        }
      </ul>
    </Fragment>,
    <Fragment>
      <Heading>Operations</Heading>
      <ul>
        {
          teams.map((team, i) => (
            <li onClick={ onLinkClick } key={ team.id }>
              <ArrowLink to={ team.fields.path } text={ team.name } />
            </li>
          ))
        }
      </ul>
    </Fragment>,
  ]

  const springs = useSprings(
    columns.length,
    columns.map((item, i) => ({
      from: { opacity: 0, transform: 'translateY(-50px)' },
      to: { opacity: 1, transform: 'translateY(0)' },
      delay: i * 75,
    }))
  )

  console.log(springs)

  return (
    <Grid fluid component="nav">
      <Row>
        { springs.map((styles, i) => <NavColumn xs={ 12 } md={ 4 } style={{ ...styles, flex: 1 }}>{ columns[i] }</NavColumn>) }
      </Row>
    </Grid>
  )
}

ResearchSubmenu.propTypes = {
  onLinkClick: PropTypes.func.isRequired,
}

ResearchSubmenu.defaultProps = {
  onLinkClick: () => {},
}
