import { useQuery } from "react-query";
import { getArticles } from "../../services/articles.service";

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
