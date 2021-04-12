import React from 'react'
import { Container } from '../components/layout'
import { useOrganizations } from '../hooks'
import { StaffNetwork } from '../components/viz'

const AboutPage = () => {
  const organizations = useOrganizations()
  return (
      <StaffNetwork />
  )
}

export default AboutPage
