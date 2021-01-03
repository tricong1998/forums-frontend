import { getArticles } from "../../services/articles.service";
import { QueryOptions, useQuery, QueryClient, useQueryClient } from "react-query";
import { Article } from "./Article.type";

export const useGetArticleQuery = (
  filter: Parameters<typeof getArticles>[0]
) => {
  return useQuery(["getArticles", filter], () => {
    return getArticles(filter);
  });
};

// function setArticleData(article: Article) {
//   queryClient.setQueryData(["company", article.id], article);
// }
