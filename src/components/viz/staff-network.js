import React, { useCallback, useEffect, useState } from 'react'
import styled, { useTheme } from 'styled-components'
import { graphql, useStaticQuery } from 'gatsby'
import loadable from '@loadable/component'

const ForceGraph2D = loadable(() => import('./force-graph'))

const equalArrays = (arr1, arr2) => JSON.stringify([...arr1].sort()) === JSON.stringify([...arr2].sort())

const Wrapper = styled.div(({ theme }) => `
  margin: 5rem 0;
  overflow: hidden;
  width: 100%;
  display: flex;
  justify-content: center;
  & canvas {
    border: 1px solid grey;
  }
  & .graph-tooltip {
    font-size: 66% !important;
    text-align: center;
    background-color: ${ theme.color.black } !important;
    padding: ${ theme.spacing.xs } !important;
    line-height: 1.5 !important;
  }
`)

export const StaffNetwork = ({ height = 800, width = 800 }) => {
  const theme = useTheme()
  const data = useStaticQuery(teamworkQuery)
  const [graphData, setGraphData] = useState({ nodes: [], edges: [] })
  const groups = data.groups.nodes
  const collaborations = data.collaborations.nodes
  const teams = data.teams.nodes
  const people = data.people.nodes
  const projects = data.projects.nodes
  const [selectedNodes, setSelectedNodes] = useState(new Set())
  const [selectedRootNode, setSelectedRootNode] = useState(null)

  const nodeStyles = {
    person: {
      val: 8,
      color: { main: '#6f498c', dim: '#6f498c99', },
    },
    group: {
      val: 20,
      color: { main: '#387852', dim: `#38785299`, },
    },
    collaboration: {
      val: 30,
      color: { main: `#d43737`, dim: `#d4373799`, },
    },
    team: {
      val: 20,
      color: { main: '#00abc7', dim: '#00abc799', },
    },
    project: {
      val: 5,
      color: { main: '#ff99cc', dim: '#ff99cc99', },
    },
  }

  const edgeStyles = {
    'person-group': {
      color: {
        main: theme.color.extended.contessa,
        dim: `${ theme.color.extended.contessa }66`,
      }
    },
    'collaboration-person': {
      color: {
        main: theme.color.extended.sherbet,
        dim: `${ theme.color.extended.sherbet }66`,
      },
    },
  }

  const indicentEdges = useCallback(node => {
    return graphData.links.filter(({ source, target }) => source.id === node.id || node.id === target.id)
  }, [graphData])

  const nodeHighlight = useCallback(({ x, y, val }, context) => {
    context.fillStyle = '#fff'
    context.beginPath()
    context.arc(x, y, Math.sqrt(15 * val), 0, 2 * Math.PI, false)
    context.lineWidth = 1
    context.strokeStyle = '#f33'
    context.stroke()
    // context.shadowOffsetX = 2
    // context.shadowOffsetY = 2
    // context.shadowBlur = 2
    // context.shadowColor = "rgba(0, 0, 0, 0.5)";
    context.fill()
  }, [])

  const handleNodeClick = node => {
    if (selectedRootNode && selectedRootNode === node) {
      setSelectedRootNode(null)
      setSelectedNodes(new Set())
    } else {
      setSelectedRootNode(node)
    }
  }
  
  //

  const createNode = useCallback((type, id, name) => ({ id: id, name: name, type: type, ...nodeStyles[type] }), [nodeStyles])
  const createEdge = useCallback((edgeType, sourceID, targetID) => ({ type: edgeType, source: sourceID, target: targetID, value: 10 }), [])

  useEffect(() => {
    let nodes = []
    let edges = []

    // add nodes
    groups.forEach(({ id, name }) => nodes.push(createNode('group', id, name)))
    collaborations.forEach(({ id, name }) => nodes.push(createNode('collaboration', id, name)))
    teams.forEach(({ id, name }) => nodes.push(createNode('team', id, name)))
    people.forEach(({ id, fullName }) => nodes.push(createNode('person', id, fullName )))
    // projects.forEach(({ id, name }) => nodes.push(createNode('project', id, name )))

    // groups.concat(collaborations).concat(teams).forEach(group => {
    //   if (group.members) {
    //     group.members.forEach(member => {
    //       // create person node and edges to its groups, collabs, teams.
    //       nodes.findIndex(node => node.id === member.id) === -1 && nodes.push(createNode('person', member.id, member.name))
    //       edges.findIndex(edge => edge.source === group.id && edge.target === member.id) === -1 && edges.push(createEdge('group-person', group.id, member.id))
    //     })
    //   }
    // })
    people.forEach(person => {
      // create person node
      // nodes.findIndex(node => node.id === person.id) === -1 && nodes.push(createNode('person', person.id, person.fullName))
      // create person -- group nodes
      // console.log(`## ${ person.id }`)
      if (person.groups) {
        // console.log(`- Groups`)
        person.groups.forEach(group => {
          edges.push(createEdge('person-group', person.id, group.id))
          // console.log(`  + ${ group.id }`)
        })
      }
      if (person.collaborations) {
        // console.log(`- Collaborations`)
        person.collaborations.forEach(collaboration => {
          edges.push(createEdge('person-group', person.id, collaboration.id))
          // console.log(`  + ${ collaboration.id }`)
        })
      }
      if (person.teams) {
        // console.log(`- Teams`)
        person.teams.forEach(team => {
          edges.push(createEdge('person-group', person.id, team.id))
          // console.log(`  + ${ team.id }`)
        })
      }
      // if (!person.groups && !person.collaborations && !person.teams) {
      //   console.log(`None`)
      // }
      // if (person.projects) {
      //   person.projects.forEach(project => {
      //     edges.push(createEdge('person-group', person.id, project.id))
      //     console.log(`${ person.id } -- ${ project.id }`)
      //   })
      // }
    })
    setGraphData({ nodes: nodes, links: edges })
  }, [])

  useEffect(() => {
    const getNeighborhood = node => {
      if (!node) return 
      let neighborhood = new Set()
      indicentEdges(node).forEach(edge => {
        if (!neighborhood.has(edge.source)) { neighborhood.add(edge.source) }
        if (!neighborhood.has(edge.target)) { neighborhood.add(edge.target) }
      })
      return neighborhood
    }

    setSelectedNodes(new Set())
    if (!selectedRootNode) return
    let neighborhood = getNeighborhood(selectedRootNode)
    setSelectedNodes(equalArrays(neighborhood, selectedNodes) ? new Set() : neighborhood)
  }, [selectedRootNode])

  return (
    <Wrapper>
      {
        graphData.nodes && graphData.links && (
          <ForceGraph2D
            height={ height }
            width={ width }
            graphData={ graphData }
            nodeLabel={ node => node.name }
            nodeVal={ node => node.val }
            nodeRelSize={ 3 }
            nodeColor={ node => selectedNodes.size ? selectedNodes.has(node) ? node.color.main : node.color.dim : node.color.main }
            linkColor="black"
            linkWidth={ edge => selectedNodes.size ? (selectedNodes.has(edge.source) && selectedNodes.has(edge.target)) ? 1.5 : 0.5 : 1.5 }
            onNodeClick={ handleNodeClick }
            nodeCanvasObjectMode={ node => selectedRootNode === node ? 'before' : undefined }
            nodeCanvasObject={ nodeHighlight }
            linkDirectionalParticleColor={ e => edgeStyles[e.type].particle.color }
            linkLineDash={ e => e.type === 'partner' ? [2, 2] : [1,0] }
            enableZoomPanInteraction={ true }
            enablePointerInteraction={ true }
            zoomToFit={ () => (1000, 50) }
          />
        )
      }
    </Wrapper>
  )
}

const teamworkQuery = graphql`{
  groups: allGroupsYaml {
    nodes {
      id
      name
      members {
        id
        name: fullName
      }
      projects {
        id
        name
      }
    }
  }
  collaborations: allCollaborationsYaml {
    nodes {
      id
      name
      members {
        id
        name: fullName
      }
      projects {
        id
        name
      }
    }
  }
  teams: allTeamsYaml {
    nodes {
      id
      name
      members {
        id
        name: fullName
      }
    }
  }
  people: allPeopleYaml {
    nodes {
      id
      fullName
      groups {
        id
      }
      collaborations {
        id
      }
      teams {
        id
      }
      projects {
        id
      }
    }
  }
  projects: allProjectsYaml {
    nodes {
      id
      name
    }
  }
}`