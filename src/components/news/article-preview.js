import React, { Fragment } from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import Img from 'gatsby-image'
import { Subheading } from '../typography'
import { Container as Grid, Row, Col, Visible } from 'react-grid-system'
import { ArrowLink } from '../link'
import { Label } from './label'
import { NewsDate } from './news-date'

const Wrapper = styled.article`
  margin: 0;
`

const TitleContainer = styled.div`
  & .row {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
  }
`

const BodyContainer = styled.div`
  max-height: 150px;
  overflow-y: hidden;
  position: relative;
  &::after {
    content: "";
    position: absolute;
    background-image: linear-gradient(#ffffff00, #ffffff);
    bottom: 0;
    left: 0;
    right: 0;
    height: 3rem;
    max-height: 3rem;
    pointer-events: none;
  }
`

export const ArticlePreview = ({ article, path, spotlight, compact = false }) => {
  const hasPreviewImage = (article.frontmatter.previewImage !== null) && (compact === false)
  
  return (
    <Wrapper>
      <Grid fluid>
        <Row>
          {
            hasPreviewImage && (
              <Fragment>
                <Visible xs sm>
                  <Col xs={ 12 }>
                    <Img
                      fluid={ article.frontmatter.previewImage.childImageSharp.fluid }
                      imgStyle={{ width: 'auto', height: '100%' }}
                      alt="Preview image"
                    />
                    <br/>
                  </Col>
                </Visible>
                <Visible md lg xl>
                  <Col md={ 5 } lg={ 4 }>
                    <Img
                      fluid={ article.frontmatter.previewImage.childImageSharp.fluid }
                      style={{ width: '100%', height: '250px' }}
                      alt="Preview image"
                    />
                    <br/>
                  </Col>
                </Visible>
              </Fragment>
            )
          }
          <Col xs={ 12 } sm={ 12 } md={ hasPreviewImage ? 7 : 12 } lg={ hasPreviewImage ? 8 : 12 }>
            <TitleContainer>
              <div className="row">
                <NewsDate>{ article.frontmatter.publishDate }</NewsDate>
                &nbsp;&nbsp;
                <Label className={ article.fields.newsType }>{ article.fields.newsType }</Label>
                {
                  spotlight && (
                    <Fragment>
                      &nbsp;&nbsp;
                      <Label className="spotlight">Spotlight</Label>
                    </Fragment>
                  )
                }
              </div>
              <Subheading className="title"><Link to={ article.fields.path }>{ article.frontmatter.title }</Link></Subheading>
            </TitleContainer>
            <BodyContainer dangerouslySetInnerHTML={{ __html: article.excerpt }} />
            <ArrowLink to={ article.fields.path } text="Continue Reading" float="right" />
          </Col>
        </Row>
      </Grid>
    </Wrapper>
  )
}
