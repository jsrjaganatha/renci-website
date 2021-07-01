import React from 'react'
import { SEO } from '../components/seo'
import { Container } from '../components/layout'
import { Title, Paragraph } from '../components/typography'

const PublicationsPage = () => {
  return (
    <Container>
      <SEO title="RENCI Publications" />
      
      <br />
      <Title>RENCI Publications</Title>
      <br />

      <Paragraph>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Quas in, repellat fugit suscipit dolores possimus, eos nihil
        praesentium unde cumque ea omnis veritatis quaerat id.
      </Paragraph>
      
      <Paragraph>
        Libero aperiam, adipisci cum natus eaque officiis consequatur, laboriosam?
        Alias fugiat similique officiis eaque minima, vitae atque! Iure nemo,
        nesciunt cum possimus nulla aut tenetur!
      </Paragraph>

      <Paragraph>
        no idea.
      </Paragraph>

    </Container>
  )
}

export default PublicationsPage
