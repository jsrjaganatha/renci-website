import React, { useEffect, useLayoutEffect, useState } from 'react'
import styled, { useTheme } from 'styled-components'
import PropTypes from 'prop-types'
import Img from 'gatsby-image'
import { Header } from './header'
import { Main } from './main'
import { Footer } from './footer'
import { Container } from '../container'
import { Menu, MobileMenu, ResearchSubmenu } from '../../menu'
import { Link, IconLink } from '../../link'
import { Icon } from '../../icon'
import { useBrand, useWindow } from '../../../hooks'
import { Container as Grid, Row, Col } from 'react-grid-system'
import { asciiLogo } from '../../../content/ascii-logo'

import "../../../styles/base.css"

export const Page = styled.div(({ theme }) => `
  position: relative;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  color: ${ theme.color.primary.main };
  width: 100%;
  margin: auto;
  // overflow: auto;
  & *::selection {
    background-color: ${ theme.color.lightgrey };
    color: ${ theme.color.renciBlue };
  }
  & *::-moz-selection {
    background-color: ${ theme.color.lightgrey };
    color: ${ theme.color.renciBlue };
  }
  & .github-link {
    position: absolute;
    right: ${ theme.spacing.medium };
    bottom: ${ theme.spacing.medium };
    filter: opacity(0.25) saturate(0.25);
    transition: filter 250ms;
    &:hover {
      filter: opacity(1.0) saturate(1.0);
    }
  }
`)

const FooterContents = () => {
  const { light: logo } = useBrand()

  return (
    <Grid fluid>
      <Row>
        <Col xs={ 12 }>
          <Img fixed={ logo } style={{ width: '82.5px', height: '54px', margin: 0 }} /> <br/>
        </Col>
        <Col xs={ 12 } md={ 6 } lg={ 5 }>
          <p>
            RENCI Anchor at Europa Center <br/>
            100 Europa Drive, Suite 540 <br/>
            Chapel Hill, NC  27517
          </p>
          <p>media@renci.org</p>
          <p>919-445-9540</p>
        </Col>
        <Col xs={ 12 } md={ 6 } lg={ 3 }>
          <strong>Partners</strong>
          <p>
            <Link to="https://www.unc.edu/">UNC-Chapel Hill</Link> <br/>
            <Link to="https://www.ncsu.edu/">NC State University</Link> <br/>
            <Link to="https://duke.edu/">Duke University</Link>
          </p>
        </Col>
        <Col xs={ 12 } md={ 6 } lg={ 2 }>
          <strong>Connect</strong>
          <p>
            <Link to="https://www.twitter.com/RENCI">Twitter</Link> <br/>
            <Link to="https://www.facebook.com/renci.org">Facebook</Link> <br/>
            <Link to="https://www.linkedin.com/company/65321">LinkedIn</Link> <br/>
            <Link to="https://www.youtube.com/RENCIMedia">YouTube</Link> <br/>
          </p>
        </Col>
        <Col xs={ 12 } md={ 6 } lg={ 2 }>
          <strong>More</strong>
          <p>
            <Link to="/about">About</Link> <br/>
            <Link to="/careers">Careers</Link> <br/>
            <Link to="https://dashboard.renci.org/">RENCI Dashboard</Link> <br/>
          </p>
        </Col>
        <Col xs={ 12 } style={{ textAlign: 'center' }}>
          &copy; { new Date().getFullYear() }
        </Col>
      </Row>
    </Grid>
  )
}

const menuItems = [
  { path: '/about', text: 'About' },
  { path: '/research', text: 'Research', submenu: ResearchSubmenu },
  { path: '/people', text: 'People' },
  { path: '/news', text: 'News' },
  // { path: '/events', text: 'Events' },
  // { path: '/publications', text: 'Publications' },
]
 
export const DefaultLayout = ({ children, currentPath }) => {
  const { windowWidth } = useWindow()
  const [darkHeader, setDarkHeader] = useState(1)
  const [compact, setCompact] = useState(windowWidth < 1000)
  const logos = useBrand()
  const theme = useTheme()

  useEffect(() => console.log(asciiLogo), [])

  useEffect(() => setCompact(windowWidth < 1000), [windowWidth])

  useLayoutEffect(() => {
    setDarkHeader(currentPath === '/' ? 1 : 0)
  }, [currentPath])

  return (
    <Page>
      <Header dark={ darkHeader }>
        <Link to="/" alt="Navigate to RENCI Home">
          <Img fixed={ darkHeader ? logos.dark : logos.light } style={{ width: '180px', margin: '6px 1rem' }} imgStyle={{ width: 'auto', height: '100%' }} alt="" />
        </Link>
        { compact ? <MobileMenu items={ menuItems } /> : <Menu items={ menuItems } dark={ darkHeader } /> }
      </Header>
      <Main>{ children }</Main>
      <Footer>
        <Container>
          <FooterContents />
        </Container>
      </Footer>
      <IconLink
        className="github-link"
        to="https://github.com/renci/renci-website"
        aria-label="View this website's source code on GitHub"
        icon={ <Icon icon="github" size={ 24 } fill={ theme.color.renciBlue } /> }
      />
    </Page>
  )
}

DefaultLayout.propTypes = {
  children: PropTypes.node.isRequired,
}
