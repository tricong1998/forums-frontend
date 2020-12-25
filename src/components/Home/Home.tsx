import { ArticleState, Article } from "../Article/Article.type"
import React from "react"
import { useSelector, shallowEqual, useDispatch } from "react-redux";

const ArticlePreview = (props: {
  article: Article
} )=> {
  return (<div>

  </div>)
}
class Home extends React.Component {
  articles: Article[] = useSelector((state: ArticleState) => state.articles, shallowEqual)
  render() {
    return (
      <div>
        {this.articles.map(article => {
          return <ArticlePreview article={article}></ArticlePreview>
        })}
      </div>
    )
  }
}

export default Home