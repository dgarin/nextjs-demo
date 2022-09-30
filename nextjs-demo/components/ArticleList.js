import React from 'react'
import articleStyles from '../styles/article.module.css'
import ArticleItem from './ArticleItem'

const ArticleList = ({articles}) => {
  return (
    <div className={articleStyles.grid}>
        {articles.map(article => <ArticleItem article={article} key={article.id}></ArticleItem>)}
    </div>
  )
}

export default ArticleList