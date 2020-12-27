import { ArticleFilter } from "./article.service.type";
import { fetchPaginatedData } from "../lib/api";
import { Article } from "../components/Article/Article.type";

const apiArticleService = ``;

export const getArticles = (filter: ArticleFilter) => {
  const getArticleServiceUrl = `${apiArticleService}/articles`
  return fetchPaginatedData<Article[]>(getArticleServiceUrl, filter)
}