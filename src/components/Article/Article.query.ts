import { getArticles } from "../../services/articles.service";
import { QueryOptions, useQuery, QueryClient } from "react-query";
import { Article } from "./Article.type";

export const useGetArticleQuery = (
  filter: Parameters<typeof getArticles>[0]
) => {
  return useQuery(["getArticles", filter], () => {
    const request = getArticles(filter);
    request.then((res) => {
      res.items.forEach((article) => {
        setArticleData(article);
      });
    });
    return request;
  });
};

function setArticleData(article: Article) {
  QueryClient.setQueryData(["company", article.id], article);
}
