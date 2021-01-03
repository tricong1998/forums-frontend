import { Article } from "./Article.type";
import React from "react";
import ArticlePreview from "./ArticlePreview";
import { useQueryClient } from "react-query";
import { useGetArticleQuery } from "./Article.query";

type ArticlesListProps = {
  articles: Article[];
};

const ArticlesList = () => {
  const queryClient = useQueryClient()
  const { isLoading, isError, data, error }  = useGetArticleQuery({})
  if (!isLoading) {
    return (<div>Loading...</div>)
  }

  if (!data?.isEmpty) {
    return (<div>No articles to show...</div>)
  }

  if (isError) {
    
  }

  data.items.forEach(article => {
    queryClient.setQueryData(["articlesList", article.id], article);
  });

  return <div>
    {data.items.map(element => {
      return <ArticlePreview article={element} key={element.slug}></ArticlePreview>
    })}
  </div>
};

export default ArticlesList
