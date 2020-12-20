import { Article } from "./Article.type";
import React from "react";
import ArticlePreview from "./ArticlePreview";

type ArticlesListProps = {
  articles: Article[];
};

const ArticlesList = (props: ArticlesListProps) => {
  if (!props.articles) {
    return (<div>Loading...</div>)
  }

  if (!props.articles.length) {
    return (<div>No articles to show...</div>)
  }

  return <div>
    {props.articles.map(element => {
      return <ArticlePreview article={element} key={element.slug}></ArticlePreview>
    })}
  </div>
};

export default ArticlesList
