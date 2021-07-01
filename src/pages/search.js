import React from 'react'
import { Container } from '../components/layout'
import { SEO } from '../components/seo'
import { Title } from '../components/typography'
import algoliasearch from 'algoliasearch/lite'
import { InstantSearch } from 'react-instantsearch-dom'
import { SearchBox, SearchResults } from '../components/search'

const searchClient = algoliasearch('XU4L9VFUC9', 'a684a96c762d601cf1b43c9e5ec28029')

const SearchPage = () => {
  return (
    <Container>
      <SEO title="Search" />

      <br />
      <Title>Search</Title>
      <br />

      <InstantSearch searchClient={ searchClient } indexName="NEWS">
        <SearchBox />
        <SearchResults />
      </InstantSearch>

    </Container>
  )
}

export default SearchPage
