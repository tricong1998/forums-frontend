import { Article } from "./Article.type";
import React from "react";

type ArticlePreviewProp = {
  article: Article;
};

const ArticlePreview = (props: ArticlePreviewProp) => {
  const article = props.article;
  const authorSummary = article?.author;
  return (
    <div className="flex">
      {authorSummary?.avatar && (
        <div className="img w-10 h-10">
          <img src={authorSummary.avatar} alt="" />
        </div>
      )}
      <div className="w-full">
        <div className="author flex">
          <div className="name">{authorSummary?.userName}</div>
          <div className="article-created">{article?.createdAt.toString()}</div>
        </div>
        <div className="article">
          <div>{article?.title}</div>
          {article.tags?.length &&
            article.tags.forEach((tag) => {
              return (<div className="tag">{tag}</div>);
            })}
        </div>
      </div>
    </div>
  );
};

export default ArticlePreview;
