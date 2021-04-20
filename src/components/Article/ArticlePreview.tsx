import { Article } from "./Article.type";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FiCopy, FiEye } from "react-icons/fi";
import { IconType } from "react-icons";

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
        <div className="article mb-1 flex flex-wrap">
          <div>
            <Link to="#" className="mr-1">
              <span className="mr-1">{article?.title}</span>
            </Link>
          </div>
          <div>
            {article.tags?.length &&
              article.tags.map((tag, key) => (
                <Link to="#" className="mr-1" key={key}>
                  <span className="tag mr-1 text-xs bg-gray-300	">{tag}</span>
                </Link>
              ))}
          </div>
        </div>
        <div className="stats inline-flex justify-items-center align-middle">
          <div className="views mr-1 inline-flex justify-items-center align-middle">
            <StatElement
              Icon={FiEye}
              stat={article?.stats.views}
              statName="Views"
            ></StatElement>
          </div>
          <div className="views mr-1 inline-flex justify-items-center align-middle">
            <StatElement
              Icon={FiEye}
              stat={article?.stats.clips}
              statName="Clips"
            ></StatElement>
          </div>
          <div className="views mr-1 inline-flex justify-items-center align-middle">
            <StatElement
              Icon={FiEye}
              stat={article?.stats.comments}
              statName="Comments"
            ></StatElement>
          </div>
          <div className="views mr-1 inline-flex justify-items-center align-middle">
            <StatElement
              Icon={FiEye}
              stat={article?.stats.score}
              statName="Score"
            ></StatElement>
          </div>
        </div>
      </div>
    </div>
  );
};

const StatElement = ({
  Icon,
  stat,
  statName,
}: {
  Icon: IconType;
  stat: number;
  statName: string;
}) => {
  const [hover, setHover] = useState(false);
  const describeId = `describe-${statName}`;
  return (
    <div className="views mr-1 inline-flex justify-items-center align-middle"   aria-label={
      `${statName}: ${stat}`
    }>
      <div
        className="mr-1 justify-items-center align-middle h-full"
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        <Icon style={{ verticalAlign: "bottom" }}></Icon>
      </div>
      <span>{stat || 0}</span>
      {/* {hover && (
        <div id={describeId}>
          {statName}: {stat}
        </div>
      )} */}
    </div>
  );
};

export default ArticlePreview;
