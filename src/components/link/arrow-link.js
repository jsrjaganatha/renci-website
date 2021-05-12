import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Link } from 'gatsby'
import { Icon } from '../icon'

const Wrapper = styled.span(({ theme, float }) => `
  float: ${ float ? float : 'none' };
  position: relative;
  margin-right: ${ theme.spacing.small };
  & .icon {
    fill: ${ theme.color.darkgrey };
    padding-top: 2px;
    transform-origin: 50% 50%;
    transition: transform 100ms, opacity 250ms;
    // opacity: 0.25;
    position: absolute;
    top: 50%;
    transform: translateY(-50%) scale(0.9);
  }
  & .icon-left {
    right: 100%;
  }
  & .icon-right {
    left: 100%;
  }
  &:hover, &:focus {
    transition: transform 250ms, opacity 100ms;
    & .icon { opacity: 1.0; }
    & .icon-left { transform: translateY(-50%) scale(1.0) translateX(-0.2rem); }
    & .icon-right { transform: translateY(-50%) scale(1.0) translateX(0.2rem); }
  }
`)

export const ArrowLink = ({ text, float, arrowPlacement, ...props }) => {
  if (arrowPlacement === 'left') {
    return (
      <Wrapper float={ float } placement={ arrowPlacement }>
        <Icon icon="arrow-left" className="icon icon-left" size={ 14 } />
        <Link { ...props }>{ text }</Link>
      </Wrapper>
    )
  }
  return (
    <Wrapper float={ float } placement={ arrowPlacement }>
      <Link { ...props }>{ text }</Link>
      <Icon icon="arrow-right" className="icon icon-right" size={ 14 } />
    </Wrapper>
  )
}

ArrowLink.propTypes = {
  arrowPlacement: PropTypes.oneOf(['left', 'right']).isRequired,
  text: PropTypes.string.isRequired,
}

ArrowLink.defaultProps = {
  arrowPlacement: 'right',
}
