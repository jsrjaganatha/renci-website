import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Tooltip } from '../tooltip'
import { IconLink } from '../link'
import { Icon } from '../icon'

const Wrapper = styled.div(({ theme }) => `
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  margin: ${ theme.spacing.medium } 0;
  & > * { margin: 0 0.25rem; }
  svg {
    fill: ${ theme.color.darkgrey };
  }
  a {
    transition: filter 250ms;
  }
  a:hover, a:focus {
    filter: brightness(0.9);
    svg {
      transition: fill 500ms;
      fill: ${ theme.color.renciBlue };
    }
  }
`)

const domainPattern = new RegExp(/\/\/(\w+\.\w+)\//)

export const LinkTray = ({ urls }) => {
  if (!urls) {
    return <Wrapper />
  }
  return (
    <Wrapper>
      {
        urls.map(url => {
          const matches = url.match(domainPattern)
          if (!matches) {
            return <Tooltip tip="Website"><IconLink to={ url } aria-label="View Website" icon={ <Icon icon="link" size={ 24 } /> }></IconLink></Tooltip>
          }
          const domain = matches[1]
          switch (domain) {
            case 'github.com':
              return <Tooltip tip="GitHub"><IconLink to={ url } aria-label="View GitHub Page" icon={ <Icon icon="github" size={ 24 } /> }></IconLink></Tooltip>
            case 'instagram.com':
              return <Tooltip tip="Instagram"><IconLink to={ url } aria-label="View Instagram Profile" icon={ <Icon icon="instagram" size={ 24 } /> }></IconLink></Tooltip>
            case 'linkedin.com':
              return <Tooltip tip="LinkedIn"><IconLink to={ url } aria-label="View LinkedIn Profile" icon={ <Icon icon="linked-in" size={ 24 } /> }></IconLink></Tooltip>
            case 'twitter.com':
              return <Tooltip tip="Twitter"><IconLink to={ url } aria-label="View Twitter Profile" icon={ <Icon icon="twitter" size={ 24 } /> }></IconLink></Tooltip>
            case 'youtube.com':
              return <Tooltip tip="YouTube"><IconLink to={ url } aria-label="View YouTube Profile" icon={ <Icon icon="youtube" size={ 24 } /> }></IconLink></Tooltip>
            default:
              return <Tooltip tip="Website"><IconLink to={ url } aria-label="View Website" icon={ <Icon icon="link" size={ 24 } /> }></IconLink></Tooltip>
          }
          // return <span>{ url }</span>
        })
      }
    </Wrapper>
  )
}

LinkTray.propTypes = {
  urls: PropTypes.array,
}

LinkTray.defaultProps = {
  urls: [],
}
