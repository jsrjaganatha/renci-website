import React from 'react'
import { SEO } from '../components/seo'
import { Container } from '../components/layout'
import { Title } from '../components/typography'
import { useTags } from '../hooks'

const TagsPage = () => {
  const tags = useTags()

  return (
    <Container>
      <SEO title="Tags" />

      <br />
      <Title>Tags</Title>
      <br />

      <pre>{ JSON.stringify(tags, null, 2) }</pre>

    </Container>
  )
}

export default TagsPage
