import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Img from 'gatsby-image'
import { useScrollPosition } from '../../hooks'
import { Container } from './container'

const Content = styled.div(({ theme }) => `
  color: ${ theme.color.white };
  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  padding: ${ theme.spacing.large };
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-width: 100%;
  max-width: 1200px;
  background-color: #000000cc;
  letter-spacing: 1px;
  & a {
    color: ${ theme.color.white };
    text-decoration-color: ${ theme.color.white };
  }
`)

// const Overlay = styled.div(({ theme, color }) => `
//   position: absolute;
//   left: 0;
//   top: 0;
//   width: 100%;
//   height: 100%;
//   background-color: ${ color };
//   opacity: 0.1;
// `)

const Wrapper = styled.div(({ theme, backgroundColor }) => `
  position: relative;
  min-height: 500px;
  overflow: hidden;
  background-color: ${ backgroundColor };
`)

const Pattern = styled.div(({ theme }) => `
  position: relative;
  min-height: 500px;
  overflow: hidden;
  background-color: ${ theme.color.darkgrey };
  background-image:
    linear-gradient(30deg, #000000 12%, transparent 12%, transparent 87%, #000000 87%, #000000),
    linear-gradient(150deg, #000000 12%, transparent 12%, transparent 87%, #000000 87%, #000000),
    linear-gradient(30deg, #000000 12%, transparent 12%, transparent 87%, #000000 87%, #000000),
    linear-gradient(150deg, #000000 12%, transparent 12%, transparent 87%, #000000 87%, #000000),
    linear-gradient(60deg, #00000066 25%, transparent 25.5%, transparent 75%, #00000066 75%, #00000066), 
    linear-gradient(60deg, #00000066 25%, transparent 25.5%, transparent 75%, #00000066 75%, #00000066);
  background-size:40px 70px;
  background-position: 0 0, 0 0, 20px 35px, 20px 35px, 0 0, 20px 35px;
`)

export const Hero = ({ backgroundImage, backgroundColor, overlayColor, children }) => {
  const { scrollPosition } = useScrollPosition()

  return (
    <Wrapper backgroundColor={ backgroundColor }>
      {
        backgroundImage
          ? <Img fluid={{
              ...backgroundImage,
              sizes: '(min-width: 1600) 1600px, (min-width: 1200) 1200px, (min-width: 800) 800px'
            }}
            style={{ height: '500px' }} imgStyle={{ transform: `translateY(${ scrollPosition / 2 }px)` }}
          /> : <Pattern />
      }
      { children && <Content><Container>{ children }</Container></Content> }
    </Wrapper>
  )
}

Hero.propTypes = {
  backgroundImage: PropTypes.object,
  backgroundColor: PropTypes.string.isRequired,
  overlayColor: PropTypes.string.isRequired,
  children: PropTypes.node,
}

Hero.defaultProps = {
  backgroundColor: '#000',
  overlayColor: '#000',
}
