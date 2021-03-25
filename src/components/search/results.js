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

const IndexResults = connectStateResults(({ searchState, searchResults, children }) => {
  return searchResults && searchResults.nbHits !== 0
    ? children
    : <span />
})

const AllResults = connectStateResults(({ allSearchResults, children }) => {
  const hasResults = allSearchResults && Object.values(allSearchResults).some(results => results.nbHits > 0)
  if (hasResults) {
    return children
  }
  return (
    <div>
      <div>No results.</div>
      <Index indexName="PEOPLE" />
      <Index indexName="GROUPS" />
      <Index indexName="COLLABORATIONS" />
      <Index indexName="PROJECTS" />
      <Index indexName="NEWS" />
    </div>
  )
})

export const SearchResults = connectStateResults(({ searchState, searching, allSearchResults, searchResults }) => {
  if (!searchState.query) {
    return <div />
  }
  return (
    <AllResults>
      <Index indexName="PEOPLE">
        <IndexResults>
          <Section title="People">
            <StyledHits hitComponent={ PersonResult } />
          </Section>
        </IndexResults>
      </Index>


      <Index indexName="GROUPS">
        <IndexResults>
          <Section title="Groups">
            <StyledHits hitComponent={ GroupResult } />
          </Section>
        </IndexResults>
      </Index>


      <Index indexName="COLLABORATIONS">
        <IndexResults>
          <Section title="Collaborations">
            <StyledHits hitComponent={ CollaborationResult } />
          </Section>
        </IndexResults>
      </Index>


      <Index indexName="PROJECTS">
        <IndexResults>
          <Section title="Projects">
            <StyledHits hitComponent={ ProjectResult } />
          </Section>
        </IndexResults>
      </Index>


      <Index indexName="NEWS">
        <IndexResults>
          <Section title="News">
            <StyledHits hitComponent={ NewsResult } />
          </Section>
        </IndexResults>
      </Index>
    </AllResults>
  )
})