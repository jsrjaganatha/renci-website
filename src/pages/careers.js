import React, { Fragment } from 'react'
import { SEO } from '../components/seo'
import { Container, Hero, Section, Article } from '../components/layout'
import { Title, Paragraph } from '../components/typography'
import { useCareers } from '../hooks'
import { JobPosting } from '../components/careers'

const CareersPage = () => {
  const careers = useCareers()
  
  return (
    <Fragment>
      <Hero>
        <Title>RENCI Careers</Title>
      </Hero>
      <Container>
        <SEO title="RENCI Careers" />

        <Section title="Why RENCI?">
          <Article title="">
            <Paragraph>
              RENCI's inclusive, creative method transcends disciplinary boundaries to catalyze data-driven discovery and innovation for the public good.
              A career at RENCI offers a stimulating, collaborative environment where you can unleash your intellectual potential to advance technology and accelereate research.
              We look forward to meeting you!
            </Paragraph>
            <Paragraph>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam provident magnam similique assumenda, corporis vel nemo optio eius aut asperiores ducimus hic in eligendi eaque nesciunt quas eos dignissimos aliquam.
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam provident magnam similique assumenda, corporis vel nemo optio eius aut asperiores ducimus hic in eligendi eaque nesciunt quas eos dignissimos aliquam.
            </Paragraph>
          </Article>
        </Section>

        <Section title="Open Positions">
          {
            careers.map(posting => (
              <JobPosting
                key={ posting.id }
                title={ posting.frontmatter.title }
                publishDate={ posting.frontmatter.publishDate }
                positionNumber={ posting.frontmatter.unc_position_number }
                description={ posting.html }
                url={ `http://unc.peopleadmin.com/postings/${ posting.frontmatter.unc_position_number }` }
              />
            ))
          }
        </Section>

      </Container>
    </Fragment>
  )
}

export default CareersPage
