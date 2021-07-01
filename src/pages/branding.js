import React from 'react'
import { SEO } from '../components/seo'
import { Container, Section, Article } from '../components/layout'
import { Title, Paragraph } from '../components/typography'

const BrandingPage = () => {
  return (
    <Container>      
      <SEO title="RENCI Branding and Style Guide" />
      
      <br />
      <Title>RENCI Branding & Style Guide</Title>
      <br />

      <Paragraph>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Quas in, repellat fugit suscipit dolores possimus, eos nihil
        praesentium unde cumque ea omnis veritatis quaerat id.
      </Paragraph>
      
      <Section title="Personality">
        <Article title="Bold">
          <Paragraph>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam provident magnam similique assumenda, corporis vel nemo optio eius aut asperiores ducimus hic in eligendi eaque nesciunt quas eos dignissimos aliquam.
          </Paragraph>
        </Article>
        <Article title="Optimistic">
          <Paragraph>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae vitae omnis saepe quas necessitatibus accusamus!
          </Paragraph>
        </Article>
        <Article title="Practical">
          <Paragraph>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero ab ducimus quibusdam minus corporis eveniet sunt, expedita assumenda sequi, placeat, excepturi, autem mollitia nam. Alias voluptas facere natus, saepe ullam vero eius et porro assumenda reiciendis esse distinctio similique accusantium, fugiat. Eveniet magni, quisquam voluptatem incidunt facilis, facere a soluta.
          </Paragraph>
        </Article>
      </Section>

      <Section title="Writing Style">
        <Article title="Clean">
          <Paragraph>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum expedita voluptatum quia laboriosam rem quod nesciunt dicta, deleniti voluptates molestias modi asperiores fugit ex repellat, et ratione perspiciatis architecto reprehenderit adipisci quidem? Nam ipsa dolores, placeat neque commodi, rem sed facilis vel ad voluptas incidunt perspiciatis asperiores labore mollitia corporis.
          </Paragraph>
        </Article>
        <Article title="Simple">
          <Paragraph>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae doloremque sed nihil, quos mollitia ducimus perspiciatis dolores, numquam corporis sapiente, voluptates, vel cumque excepturi in harum fuga amet tempore quidem.
          </Paragraph>
        </Article>
      </Section>

      <Section title="Color">
        <Article title="Overview">
          <Paragraph>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam quia vel, totam eius fuga repellendus doloribus beatae aspernatur voluptatibus architecto vero blanditiis ullam consequatur aperiam maiores ab vitae laudantium. Nostrum.
          </Paragraph>
        </Article>
        <Article title="Primary Palette">
          <Paragraph>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam quia vel, totam eius fuga repellendus doloribus beatae aspernatur voluptatibus architecto vero blanditiis ullam consequatur aperiam maiores ab vitae laudantium. Nostrum.
          </Paragraph>
          <Paragraph>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus non dolorem aut, aperiam ut.
          </Paragraph>
        </Article>
        <Article title="Secondary Palette">
          <Paragraph>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam quia vel, totam eius fuga repellendus doloribus beatae aspernatur voluptatibus architecto vero blanditiis ullam consequatur aperiam maiores ab vitae laudantium. Nostrum.
          </Paragraph>
          <Paragraph>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus non dolorem aut, aperiam ut.
          </Paragraph>
        </Article>
        <Article title="Extended Palette">
          <Paragraph>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam quia vel, totam eius fuga repellendus doloribus beatae aspernatur voluptatibus architecto vero blanditiis ullam consequatur aperiam maiores ab vitae laudantium. Nostrum.
          </Paragraph>
          <Paragraph>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus non dolorem aut, aperiam ut.
          </Paragraph>
        </Article>
      </Section>

      <Section title="Logos">
        <Article title="The RENCI Logo">
          <Paragraph>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione velit, voluptatem quo quaerat nostrum!
          </Paragraph>
          <Paragraph>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit ducimus voluptates repudiandae quia velit, ab incidunt laborum, possimus nulla, porro deserunt officia debitis consequuntur vitae laboriosam. Quam error neque nihil natus, nam voluptatum iusto dignissimos exercitationem maiores non odit ab facere quo reprehenderit doloremque molestias suscipit impedit aut pariatur in.
          </Paragraph>
        </Article>

        <Article title="Logo Color">
          <Paragraph>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit ducimus voluptates repudiandae quia velit, ab incidunt laborum, possimus nulla, porro deserunt officia debitis consequuntur vitae laboriosam. Quam error neque nihil natus, nam voluptatum iusto dignissimos exercitationem maiores non odit ab facere quo reprehenderit doloremque molestias suscipit impedit aut pariatur in.
          </Paragraph>
          <Paragraph>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione velit, voluptatem quo quaerat nostrum!
          </Paragraph>
        </Article>

        <Article title="Clearance & Alignment">
          <Paragraph>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt quod quas dolor minus quos sunt odio rerum reiciendis mollitia, nulla laboriosam tempora, officiis corporis reprehenderit, voluptate hic. Laudantium labore ullam nobis similique natus officia accusamus autem, laboriosam. Quos magni, saepe.
          </Paragraph>
        </Article>
      </Section>
      
      <Section title="Typography">
        <Article title="Overview">
          <Paragraph>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus, saepe. Tempore officia incidunt neque ipsam dolore fugit repellendus, dolor molestiae.
          </Paragraph>
        </Article>
        <Article title="RENCI Font Stack">
          <Paragraph>
            Lorem ipsum dolor sit.
          </Paragraph>
          <Paragraph>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam, tempora.
          </Paragraph>
          <Paragraph>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis id cumque error, aut.
          </Paragraph>
        </Article>
      </Section>
    </Container>
  )
}

export default BrandingPage
