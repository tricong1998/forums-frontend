import { ArticleFilter } from "./article.service.type";
import { fetchPaginatedData } from "../lib/api";
import { Article } from "../components/Article/Article.type";

const apiArticleService = ``;

const articles: Article[] = [
  {
    id: "1",
    slug: "slug",
    title: "title",
    views: 1,
    likes: 1,
    commments: {
      author: {
        avatar: "https://images.viblo.asia/avatar/6438e6e1-6d01-4de9-8865-c513af0654e4.jpg",
        userName: "userName",
        userId: "userId",
      },
      body: "body",
    },
    author: { avatar: "https://images.viblo.asia/avatar/6438e6e1-6d01-4de9-8865-c513af0654e4.jpg", userName: "userName", userId: "userId" },
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
