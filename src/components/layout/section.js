import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { Heading } from '../typography'

const DynamicHeading = styled(Heading)(({ theme }) => `
  flex: 2;
  @media (min-width: 992px) {
    text-align: right;
  }
`)

const Wrapper = styled.section(({ theme, fullWidth }) => `
  width: 100%;
  margin: 1rem auto;
  padding: ${ theme.spacing.medium };
  @media (min-width: 1240px) {
    padding: ${ theme.spacing.large } 0;
  }
  display: flex;
  flex-direction: column;
  &:not(:first-child) {
    border-top: 1px solid ${ theme.color.lightgrey };
  }
  ${
    fullWidth ? `
      & ${ DynamicHeading } {
        text-align: left;
        padding: 1rem 0;
      }
      & ${ Content } {
        padding: 1rem 0;
      }
    ` : `
      @media (min-width: 992px) {
        flex-direction: row;
      }
    `
  }
`)

const Content = styled.div(({ theme }) => `
  flex: 7;
  margin: 0;
  padding: 1rem 0;
  @media (min-width: 992px) {
    padding: 0 1rem;
  }
`)

export const Section = ({ title, children, fullWidth }) => {
  return (
    <Wrapper fullWidth={ fullWidth }>
      { title && <DynamicHeading>{ title }</DynamicHeading> }
      <Content>{ children }</Content>
    </Wrapper>
  )
}

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node.isRequired,
  fullWidth: PropTypes.bool.isRequired,
}

Section.defaultProps = {
  fullWidth: false,
}