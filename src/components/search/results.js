import React, { Fragment, useEffect, useMemo, useState } from 'react'
import { Section } from '../layout'
import styled from 'styled-components'
import { connectStateResults, Hits, Index } from 'react-instantsearch-dom'
import { CollaborationResult, GroupResult, NewsResult, PersonResult, ProjectResult } from './result'
import { LoadingIndicator } from '../loading-indicator'

const StyledHits = styled(Hits)`
  & ul {
    list-style-type: none;
    margin: 0;
  }
`

const Results = ({ title, indexName, hitComponent }) => {
  return (
    <Section title={ title }>
      <Index indexName={ indexName }>
        <StyledHits hitComponent={ hitComponent }/>
      </Index>
    </Section>
  )
}

export const SearchResults = connectStateResults(({ searchState, searching, allSearchResults }) => {
  // useEffect(() => {
  //   if (allSearchResults) {
  //     console.log(allSearchResults)
  //   }
  // }, [allSearchResults])

  return (
      <Fragment>
        <Results title="People" indexName="PEOPLE" hitComponent={ PersonResult } />
        <Results title="Groups" indexName="GROUPS" hitComponent={ GroupResult } />
        <Results title="Collaborations" indexName="COLLABORATIONS" hitComponent={ CollaborationResult } />
        <Results title="Projects" indexName="PROJECTS" hitComponent={ ProjectResult } />
        <Results title="News" indexName="NEWS" hitComponent={ NewsResult } />
      </Fragment>
  )}
)