import React, { useState } from 'react'
import styled, { useTheme } from 'styled-components'
import { Link } from 'gatsby'
import { Icon } from '../icon'
import { Tray } from './tray'

export const Navigation = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: stretch;
`

export const MenuLink = styled(Link)(({ theme, dark }) => `
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  padding: 0 1rem;
  text-decoration: none;
  transition: color 250ms, background-color 250ms;
  ${
    dark ? `
      color: ${ theme.color.white };
      background-color: transparent;
      &:hover {
        background-color: ${ theme.color.darkgrey };
      }
    ` : `
      color: ${ theme.color.black };
      background-color: transparent;
      &:hover {
        background-color: ${ theme.color.lightgrey };
      }
    `
  }
  &.active {
    color: ${ dark ? theme.color.white : theme.color.black };
    background-color: ${ dark ? theme.color.darkgrey : theme.color.lightgrey };
  }
`)

const MenuItem = styled.span``

const ToolsMenu = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: stretch;
`

export const Menu = ({ items, dark }) => {
  const theme = useTheme()
  const [trayOpen, setTrayOpen] = useState(false)

  const handleKeyDown = event => {
    if (event.keyCode === 27) {
      event.preventDefault()
      setTrayOpen(false)
    }
  }
  
  const handleOpenTray = () => {
    setTrayOpen(true)
    document.body.addEventListener('keydown', handleKeyDown)
  }
  
  const handleCloseTray = () => {
    setTrayOpen(false)
    document.body.removeEventListener('keydown', handleKeyDown)
  }

  return (
    <Navigation>
      {
        items.map((item, currentIndex) => item.submenu ? (
          <MenuItem key={ item.path }
            onMouseEnter={ handleOpenTray } onMouseLeave={ handleCloseTray }
            onFocus={ handleOpenTray } onBlur={ handleCloseTray }
            onClick={ handleCloseTray }
          >
            <MenuLink to={ item.path } dark={ dark } partiallyActive={ true } activeClassName="active">
              { item.text }&nbsp;<Icon icon="chevron-down" size={ 16 } fill={ dark ? theme.color.white : theme.color.darkgrey } />
            </MenuLink>
            { trayOpen && <Tray>{ React.createElement(item.submenu, { onLinkClick: handleCloseTray }) }</Tray> }
          </MenuItem>
        ) : (
          <MenuItem key={ item.path }>
            <MenuLink to={ item.path } dark={ dark } partiallyActive={ true } activeClassName="active">{ item.text }</MenuLink>
          </MenuItem>
        ))
      }
      <ToolsMenu>
        <MenuLink to="/search" partiallyActive={ true } activeClassName="active">
            <Icon icon="magnifying-glass" size={ 24 } fill={ theme.color.grey } />
        </MenuLink>
      </ToolsMenu>
    </Navigation>
  )
}
