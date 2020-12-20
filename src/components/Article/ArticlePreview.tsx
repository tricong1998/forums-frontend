import { Article } from "./Article.type";
import React from "react";

type ArticlePreviewProp = {
  article: Article;
};

const ArticlePreview = (props: ArticlePreviewProp) => {
  const article = props.article;
  const authorSummary = article.author;
  return (
    <div>
      <div className="img">
        <img src={authorSummary.avatar} alt="" />
      </div>
      <div>
        <div className="author">
          <div className="name">{authorSummary.userName}</div>
          <div className="article-created">{article.createdAt}</div>
        </div>
        <div className="article">
          <div>{article.title}</div>
          {article.tags &&
            article.tags.length &&
            article.tags.forEach((tag) => {
              return <div className="tag">{tag}</div>;
            })}
        </div>
      </div>
    </div>
  );
};

export default ArticlePreview;
