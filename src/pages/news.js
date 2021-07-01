import React, { Fragment, useEffect, useMemo, useState } from 'react'
import { SEO } from '../components/seo'
import styled from 'styled-components'
import { navigate, useLocation } from '@reach/router'
import { Container, Section, HorizontalRule } from '../components/layout'
import { Title } from '../components/typography'
import { useNews, useWindow } from '../hooks'
import { NewsFilterForm, PaginationTray, NewsContext, NewsList } from '../components/news'
import { LoadingIndicator } from '../components/loading-indicator'
import { filtersUrl } from '../components/news/utils'

// constants
const LOADING_TIME = 500
const PER_PAGE = 10
const PAGINATION_RADIUS = {
  mobile: 1,
  desktop: 2,
}
const INITIAL_FILTERS = {
  group: '',
  project: '',
  topic: '',
}
//

const FlexHeader = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  @media (min-width: 1000px) {
    flex-direction: row;
    align-items: flex-end;
  }
  & nav svg {
    transition: opacity 250ms;
    opacity: 0.4;
  }
  &:hover svg {
    opacity: 1.0;
  }
`


const NewsPage = () => {
  // this kind of thing can be done in a lot of ways, so here is a bit about state.
  // this search is navigation-based, in that the URL is the source of truth,
  // so state within this (page) component depends on the browser's URL.
  const location = useLocation()
  const { windowWidth } = useWindow()
  const { articles } = useNews() // all articles
  const [filters, setFilters] = useState(INITIAL_FILTERS)
  const [filteredArticles, setFilteredArticles] = useState(articles) // collection of all pages' articles, according to state of filters.
  const [news, setNews] = useState([]) // articles to render
  const [page, setPage] = useState(1) // page number currently beingviewed
  const [paginationRadius, setPaginationRadius] = useState(PAGINATION_RADIUS.mobile)
  const [loading, setLoading] = useState(false) // fake loading state

  // this handler handles filter changes by navigating
  // the browser to the url?with=filters&in=here.
  const changeFilterSelect = filterKey => event => {
    navigate(filtersUrl({ ...filters, page: 1, [filterKey]: event.target.value }))
  }

  // reset filters & page to 1
  const clearFilters = () => {
    setFilters(INITIAL_FILTERS)
    setPage(1)
  }

  // this is allows us to fake a "loading" state
  // when paginating through news. otherwise, the
  // user might miss the transition.
  // this is a placeholder until further news
  // questions are answered.
  useEffect(() => {
    const loadingTimer = setTimeout(() => {
      setLoading(false)
    }, LOADING_TIME)
    return () => clearTimeout(loadingTimer)
  }, [loading])

  // memoize a few oft-used values
  const pageCount = useMemo(() => Math.ceil(filteredArticles.length / PER_PAGE), [filteredArticles.length])
  const prevPage = useMemo(() => Math.max(1, page - 1), [page])
  const nextPage = useMemo(() => Math.min(pageCount, page + 1), [page, pageCount])

  // when URL('s query string) changes,
  useEffect(() => {
    // grab values from the URL.
    const queryParams = new URLSearchParams(location.search)
    const queryPage = +queryParams.get('page') || 1
    const queryGroup = queryParams.get('group') || ''
    const queryProject = queryParams.get('project') || ''
    const queryTopic = queryParams.get('topic') || ''
    // set corrsonding state values.
    setPage(queryPage)
    setFilters({
      group: queryGroup,
      project: queryProject,
      topic: queryTopic,
    })
  }, [location.search])

  // when the screen size changes, check if it's small.
  // change the pagination radius accordingly.
  useEffect(() => {
    setPaginationRadius(windowWidth < 600 ? PAGINATION_RADIUS.mobile : PAGINATION_RADIUS.desktop)
  }, [windowWidth])

  // when filters or page number changes,
  useEffect(() => {
    // fake a loading state (see a useEffect above).
    setLoading(true)
    // start with all the articles.
    let newArticles = [...articles]
    // start checking filter proprties.
    if (filters.group) {
      // remove the articles whose group tags or collaboration tags do _not_ contain filters.group.
      // note: this loops over every article.
      newArticles = newArticles.filter(article => {
        const groupMatch = article.frontmatter.groups && article.frontmatter.groups.findIndex(g => g.id === filters.group) > -1
        const collaborationMatch = article.frontmatter.collaborations && article.frontmatter.collaborations.findIndex(c => c.id === filters.group) > -1
        return groupMatch || collaborationMatch
      })
    }
    if (filters.project) {
      // here is where we'd set the group based on the project

      // remove articles not having filters.project in their project tags
      // note 1: this loops over every article remaining from the last loop through.
      // note 2: in this case, this second trip through the articles will be
      //         significantly shorter than the first trip.
      newArticles = newArticles.filter(article => {
        const projectMatch = article.frontmatter.projects && article.frontmatter.projects.map(p => p.id).includes(filters.project)
        return projectMatch
      })
    }
    if (filters.topic) {
      // remove articles not having filters.topic in their `tag` tags.
      // note: again, this loops over all remaining articles.
      newArticles = newArticles.filter(article => article.frontmatter.tags && article.frontmatter.tags.map(t => t.id).includes(filters.topic))
    }
    // set filtered articles
    setFilteredArticles(newArticles)
  }, [filters, page])

  useEffect(() => {
    const pageOfNews = filteredArticles.slice((page - 1) * PER_PAGE, page * PER_PAGE)
    setNews(pageOfNews)
  }, [page, filteredArticles])

  //

  return (
    <Container className="container">
      <NewsContext.Provider value={{ news, page, prevPage, nextPage, pageCount, paginationRadius, filters, changeFilterSelect, clearFilters, filtersUrl }}>
        <SEO title="RENCI News" />
        
        <br />
        <FlexHeader>
          <Title>RENCI News</Title>
          { pageCount > 1 && <PaginationTray /> }
        </FlexHeader>
        <br />
        
        <HorizontalRule />

        <NewsFilterForm />
        
        {
          loading ? (
            <div style={{ minHeight: '400px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <LoadingIndicator duration={ LOADING_TIME / 2 } />
            </div>
          ) : (
          <Fragment>
            <Section title={ `${ filteredArticles.length } News Item${ filteredArticles.length === 1 ? '' : 's' }` }>
              <NewsList articles={ news } />
            </Section>
            { pageCount > 0 && <PaginationTray /> }
          </Fragment>
          )
        }


        <br />

      </NewsContext.Provider>
    </Container>
  )
}

export default NewsPage
