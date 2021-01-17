import { ArticleState, Article } from "../Article/Article.type";
import React from "react";
import { useSelector, shallowEqual, useDispatch } from "react-redux";
import ArticlesList from "../Article/ArticlesList";
import { HeaderTabEnum } from "../base/base.constant";
import { Link } from "react-router-dom";
import { HomeTabs } from "./Constant";

const ArticlePreview = (props: { article: Article }) => {
  return <div></div>;
};
class Home extends React.Component {
  render() {
    return (
      <div>
        <div className="banner bg-red-800">
          <div className="mr-auto ml-auto container items-center">
            <div className="w-full">
              <img src="7790d490-af3c-4e8b-8dfa-021f38200beb.jpg" alt="" />
            </div>
          </div>
        </div>
        <div className="mr-auto ml-auto flex py-4 bg-blue-900">
          <div className="mr-auto ml-auto container">
            <Link className="mr-1 ml-1" to="#">
              {HomeTabs.NEWEST}
            </Link>
            <Link className="mr-1 ml-1" to="#">
              {HomeTabs.SERIES}
            </Link>
            <Link className="mr-1 ml-1" to="#">
              {HomeTabs.TRENDING}
            </Link>
            <Link className="mr-1 ml-1" to="#">
              {HomeTabs.VIDEOS}
            </Link>
          </div>
        </div>
        <ArticlesList></ArticlesList>
      </div>
    );
  }
}

export default Home;
