import { ArticleState, Article } from "../Article/Article.type"
import React from "react"
import { useSelector, shallowEqual, useDispatch } from "react-redux";

class Home extends React.Component<> {
  articles: Article[] = useSelector((state: ArticleState) => state.articles, shallowEqual)
  render() {
    return (
      
    )
  }
}