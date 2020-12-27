import { getArticles } from "../../services/articles.service";
import { queryCache, QueryOptions, useQuery } from "react-query";

export const useGetArticleQuery = (
  filter: Parameters<typeof getArticles>[0]
) => {
  return useQuery(["getArticles", filter], (_, pagintationfilter) => {
    const request = getArticles(pagintationfilter);
    return request;
  });
};
