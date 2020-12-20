import { UserSummary } from "../../Auth/Users.type";

export type CommentSummay = {
  author: UserSummary;
  body: string;
};
