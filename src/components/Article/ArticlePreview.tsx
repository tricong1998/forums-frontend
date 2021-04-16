import { Article } from "./Article.type";
import React from "react";
import { Link } from "react-router-dom";
import { FiCopy, FiEye } from "react-icons/fi";

type ArticlePreviewProp = {
  article: Article;
};

const ArticlePreview = (props: ArticlePreviewProp) => {
  const article = props.article;
  const authorSummary = article?.author;
  const tagClass = "";
  const timeClass = "";

  const getGapCreatedTime = (time: Date) =>
    Math.ceil((new Date().getTime() - time.getTime()) / 3600);
  return (
    <div className="flex p-2">
      {authorSummary?.avatar && (
        <div className="img w-10 h-10 mr-1 mb-1">
          <Link to="#">
            <img src={authorSummary.avatar} alt={authorSummary?.userName} />
          </Link>
        </div>
      )}
      <div className="w-full block">
        <div className="author flex-wrap mr-1 mb-1 text-xs inline-flex justify-center">
          <Link to="#" className="mr-1">
            <span className="name">{authorSummary?.userName}</span>
          </Link>
          <div>
            <span className="article-created mr-1">
              {getGapCreatedTime(article?.createdAt)} min
            </span>
            <span className="time-to-readm mr-1">
              - {article?.timeToRead.toString()} min
            </span>
          </div>
          <div className="justify-center">
            <FiCopy />
          </div>
        </div>
        <div className="article mb-1 flex">
          <div>
            <Link to="#" className="mr-1">
              <span className="mr-1">{article?.title}</span>
            </Link>
          </div>
          <div>
            {article.tags?.length &&
              article.tags.map((tag) => (
                <Link to="#" className="mr-1">
                  <span className="tag mr-1 text-xs bg-gray-300	">{tag}</span>
                </Link>
              ))}
          </div>
        </div>
        <div className="stats">
          <span className="views mr-1"><FiEye></FiEye> {article?.stats.views || 0}</span>
          <span className="clips mr-1">{article?.stats.clips || 0}</span>
          <span className="comments mr-1">{article?.stats.comments || 0}</span>
          <span className="comments mr-1">{article?.stats.score || 0}</span>
        </div>
      </div>
    </div>
  );
};

export default ArticlePreview;
