import { ArticleState, Article } from "../Article/Article.type"
import React from "react"
import { useSelector, shallowEqual, useDispatch } from "react-redux";
import ArticlesList from "../Article/ArticlesList";
import { HeaderTabEnum } from "../base/base.constant";
import { Link } from "react-router-dom";

const ArticlePreview = (props: {
  article: Article
} )=> {
  return (<div>

  </div>)
}
class Home extends React.Component {
  render() {
    return (
      <div>
        <div>
          <Link to="#">{HeaderTabEnum.POSTS}</Link>
          <Link to="#">{HeaderTabEnum.QUESTIONS}</Link>
          <Link to="#">{HeaderTabEnum.DISCUSSIONS}</Link>
        </div>
        <ArticlesList></ArticlesList>
      </div>
    )
  }
}

export default Home