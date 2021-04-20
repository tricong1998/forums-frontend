import { Article } from "./Article.type";
import ArticlePreview from "./ArticlePreview";

const ArticlesList = ({
  isLoading,
  isError,
  data,
}: {
  isLoading: boolean;
  isError: any;
  data: { items: Article[]; isEmpty: boolean } | undefined;
}) => {
  if (isLoading || !data) {
    return <div>Loading...</div>;
  }

  if (data.isEmpty) {
    return <div>No articles to show...</div>;
  }

  if (isError) {
  }
  return (
    <div>
      <div className="flex justify-end"><span>Edit view</span></div>
      {data.items.map((element) => {
        return (
          <ArticlePreview article={element} key={element.slug}></ArticlePreview>
        );
      })}
    </div>
  );
};

export default ArticlesList;
