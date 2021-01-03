import { ArticleFilter } from "./article.service.type";
import { fetchPaginatedData } from "../lib/api";
import { Article } from "../components/Article/Article.type";

const apiArticleService = ``;

const articles: Article[] = [
  {
    id: "1",
    slug: "string",
    title: "string",
    views: 1,
    likes: 1,
    commments: {
      author: {
        avatar: "string",
        userName: "string",
        userId: "string",
      },
      body: "body",
    },
    author: { avatar: "string", userName: "string", userId: "string" },
    tags: [],
    createdAt: new Date(),
    updatedAt: new Date(),
  },
]
export const getArticles = (filter: ArticleFilter): Promise<{
  items: Article[],
  isEmpty: boolean
}> => {
  const getArticleServiceUrl = `${apiArticleService}/articles`;
  return Promise.resolve({
    items: articles,
    isEmpty: false,
  });

  // return fetchPaginatedData<Article>(getArticleServiceUrl, filter);
};
