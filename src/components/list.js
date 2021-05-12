import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

export const Wrapper = styled.ul(({ theme, bullets, inline }) => `
  margin: ${ theme.spacing.small } 0;
  padding: ${ bullets === 'none' ? 0 : '0 0 0 1rem' };
  list-style-type: ${ bullets };
  & li {
    display: list-item;
    margin-right: ${ inline ? 0 : theme.spacing.small };
  }
`)

const ListItem = styled.li(({ theme }) => `
  padding: 0;
  margin: 0;
  margin-bottom: ${ theme.spacing.extraSmall };
`)

export const List = ({ items, bullets, inline, ...props }) => {
  return (
    <Wrapper bullets={ bullets } inline={ inline }>
      {
        items.map((item, i) => (
          <Fragment key={ i }>
            <ListItem>{ item }</ListItem>
            { inline && i + 1 < items.length && ', ' }
          </Fragment>
        ))
      }
    </Wrapper>
  )
}

List.propTypes = {
  items: PropTypes.array.isRequired,
  bullets: PropTypes.oneOf(['disc', 'circle', 'square', 'decimal', 'georgian', 'trad-chinese-informal', 'kannad']).isRequired,
  inline: PropTypes.bool.isRequired,
}

List.defaultProps = {
  bullets: 'disc',
  inline: false,
}
