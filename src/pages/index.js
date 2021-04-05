import React, { Fragment } from "react"
import styled from 'styled-components'
import { SEO } from '../components/seo'
import { Link } from 'gatsby'
import { Container, Section } from '../components/layout'
import { Paragraph } from '../components/typography'
import { useNews } from '../hooks'
import { NewsList } from '../components/news'
import HomeGraphic from '../images/home-graphic.svg'
import { Icon } from '../components/icon'

const LearnMoreLink = styled(Link)(({ theme }) => `
  position: absolute;
  right: 1rem;
  bottom: 1rem;
  background-color: ${ theme.color.lightgrey };
  color: ${ theme.color.dark };
  padding: ${ theme.spacing.extraSmall } ${ theme.spacing.small };
  border-radius: ${ theme.border.radius };
  font-size: 75%;
  filter: opacity(0.25);
  transition: filter 250ms;
  display: inline-flex;
  flex-direction: row;
  gap: ${ theme.spacing.small };
  align-items: center;
  text-decoration: none;
`)

const VizWrapper = styled.div`
  display: flex;
  justify-content: center;
  backgroundColor: transparent;
  position: relative;
  height: 300px;
  @media (min-width: 992px) {
    height: 600px;
  }
  &:hover ${ LearnMoreLink } {
    filter: opacity(0.75);
  }
  & img.header-viz {
    margin-bottom: -12rem;
    min-width: 900px;
    @media (min-width: 992px) {
      margin-bottom: -12rem;
      width: 100%;
      max-width: 992px;
    }
  }
`

const Overlay = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  top: 100%;
  height: 250px;
  background-color: #ffffffaa;
`

const Tagline = styled.div`
  position: absolute;
  left: 1rem;
  right: 0;
  top: 5rem;
  font-size: 300%;
  line-height: 1.5;
  font-weight: 100;
  color: #222;
  max-width: 1220px;
  margin: auto;
`

const Visualization = () => {
  return (
    <VizWrapper>
      <img className="header-viz" src={ HomeGraphic } alt="" />
      <Overlay />
      <LearnMoreLink to="/home-viz"><Icon icon="question" size={ 16 } /> <span>Explore this graphic</span></LearnMoreLink>
      <Tagline>
        We do<br />
        Data Science
      </Tagline>
    </VizWrapper>
  )  
}

const IndexPage = () => {
  const { spotlight }= useNews()

  return (
    <Fragment>
      <SEO title="Home" />

      <Visualization />

      <Container>
        <Section title="News Spotlight" fullWidth>
          <NewsList articles={ spotlight } />
        </Section>

        <Section title="Sit amet, consectetur">
          <Paragraph>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum ex sapiente excepturi blanditiis veniam debitis non ratione minus, sit quae. Quae ut reiciendis soluta eveniet corporis nisi obcaecati excepturi, accusantium!
          </Paragraph>
          <Paragraph>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime ducimus labore, dolorem sunt mollitia voluptate illo quas minima porro voluptatum voluptates eos molestiae error cupiditate recusandae velit quisquam molestias est praesentium, quod necessitatibus consequuntur veritatis? Laborum cupiditate, repudiandae libero nobis dignissimos unde, modi qui totam rem impedit nam illum cumque.
          </Paragraph>
        </Section>
      </Container>
    </Fragment>
  )
}

export default IndexPage
