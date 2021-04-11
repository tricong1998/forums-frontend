import { useGetArticleQuery } from "../../../components/Article/Article.query";
import ArticlesList from "../../../components/Article/ArticlesList";

const NewestActicles = () => {
  const { isLoading, isError, data } = useGetArticleQuery({});
  return (
    <ArticlesList
      isLoading={isLoading}
      isError={isError}
      data={data}
    />
  );
};

export default NewestActicles;
