import React from 'react'
import { SEO } from '../components/seo'
import { Container, Article, Section } from '../components/layout'
import { Title, Paragraph } from '../components/typography'
import { List } from '../components/list'
import { ArrowLink } from '../components/link'
import { useOrganizations } from '../hooks'
import { CollaborationsNetwork } from '../components/viz'

const AboutPage = () => {
  const organizations = useOrganizations()
  return (
    <Container>
      <SEO title="About RENCI" />
  
      <br />
      <Title>About RENCI</Title>
      <br />

      <Section title="We Do Data Science">
        <Paragraph>
          Every sector of society is undergoing a historic transformation driven by big data.
          RENCI is committed to transforming data into discoveries by partnering with leading universities, government, and the private sector
          to create tools and technologies that facilitate data access, sharing, analysis, management, and archiving. 
        </Paragraph>
      </Section>

      <Section title="How We Do It">
        <Paragraph>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos assumenda eveniet cupiditate asperiores quia quaerat, odio expedita reprehenderit earum aperiam, tempora doloremque et cum voluptas sunt omnis beatae provident, dolores alias eius obcaecati ullam? Expedita iste cum eos ipsam esse unde reprehenderit vero reiciendis illo velit porro vitae nihil obcaecati maxime voluptatem, consectetur rerum sunt dolor optio. Consequuntur eos ea similique alias quo omnis sint architecto recusandae minima, odit modi, cum ipsa, nihil magnam numquam eum fuga quibusdam! Quis assumenda, laboriosam modi, eveniet doloribus, numquam commodi iusto reiciendis iure cupiditate, facilis quos mollitia eaque ipsa natus sunt. Numquam minima quasi illum sunt accusantium nulla non modi doloribus vitae ipsa adipisci iste, necessitatibus, tempora atque unde veniam debitis eius incidunt eveniet voluptatum totam laboriosam aspernatur quaerat! Natus dolorem a praesentium debitis tempora, optio cumque aspernatur nisi odio veniam modi necessitatibus blanditiis at voluptatum dicta maxime, velit dolorum maiores ea, delectus ducimus nam laudantium ab saepe! Iste beatae ipsum, excepturi laudantium similique nulla? Veniam dicta sequi, aliquid fuga nam, aperiam modi aliquam id totam natus molestias earum quasi sapiente molestiae. Minus fuga tempora, dignissimos voluptatum incidunt ullam ad cum, totam similique facilis ducimus doloremque adipisci reprehenderit! Accusantium, perferendis provident quaerat iusto quos!
        </Paragraph>
      </Section>

      <Section title={ `Collaboration` }>
        <Paragraph>
          RENCI projects are researched, developed, funded through collaborations with { organizations.length } organizations.
          The force-directed graph below illustrates how research groups and projects are linked by their collaborating and funding organizations.
        </Paragraph>
        <CollaborationsNetwork />
      </Section>

      <Section title="Mission">
        <Paragraph>
          RENCI develops and deploys data science cyberinfrastructure that helps researchers in academia, government, and business use data to drive discoveries, innovate, make informed decisions, and spur economic development.
        </Paragraph>
        
        <List items={[
          'We build communities of domain scientists, data scientists, technology practitioners, and end users who apply data to catalyze innovation and knowledge discovery.',
          'We relentlessly improve our competencies in data science and cyberinfrastructure development and deployment, including the entire stack of resources and cloud services known as research cyberinfrastructure.',
          'We develop models of collaboration that translate our work into scientific, social, and economic innovations.',
          'We document and share our findings through research publications and educational materials.',
        ]} />
      </Section>
        
      <Section title="Vision">
        <Paragraph>
          RENCI strives to be a leader in data science and an essential catalyst for data-driven discoveries leading to better health, a safer environment, and improved economic and business successes.
        </Paragraph>
        <Paragraph>
          Since 2004, RENCI has served as a living laboratory fostering data science expertise, advancing software development tools and techniques, developing effective cross-disciplinary and cross-sector engagement strategies, and establishing sustainable business models for software and services. Our work aims to stimulate long-term investments that will help position North Carolina and its universities as major forces in advancing data science research and education, and the use of data for the public good.
        </Paragraph>
      </Section>

      <Section title="Values">
        <List items={[
          'We are committed to excellence and continuous improvement.',
          'We seek collaborations across disciplinary boundaries.',
          'We foster inclusivity, promote diversity, and embrace the unique skills and qualities of our employees and collaborators.',
          'We create and maintain a culture that fosters innovation, creative thinking, and scholarly works.',
          'We emphasize openness and transparency.',
          'We use sustainable practices that translate to a sustainable organization.',
        ]} />
      </Section>

      <ArrowLink to="#" text="View our Strategic Plan" float="right" />

    </Container>
  )
}

export default AboutPage
