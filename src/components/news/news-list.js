import React from 'react'
import { ArticlePreview } from './article-preview'

export const NewsList = ({ articles }) => {
  return articles.map(article => <ArticlePreview key={ article.frontmatter.slug } article={ article } />)
}

export const NewsSpotlightList = ({ articles }) => {
  return articles.map(article => <ArticlePreview key={ article.frontmatter.slug } article={ article } />)
}
