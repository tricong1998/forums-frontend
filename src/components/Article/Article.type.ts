import { UserSummary } from "../Auth/Users.type";
import { CommentSummay } from "./Comments/Comment.type";

export type Article = {
  id: string;
  slug: string;
  title: string;
  views: number;
  likes: number;
  commments: CommentSummay;
  author: UserSummary;
  tags: string[];
  createdAt: Date;
  updatedAt: Date;
};

export type ArticleState = {
  articles: Article[];
};
