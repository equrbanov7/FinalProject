import TitleItem from "../../../components/TitleItem";
import "./articlesHome.scss";
import CatchArticlesHome from "./component/CatchArticlesHome";

const ArticlesHome = () => {
  return (
    <div className="catchArticlesHome my-SpesficContainer ">
      <TitleItem titleInfo={"Lenny’s Article"} btnInfo={"View Detail"} />

     <CatchArticlesHome />
    </div>
  );
};

export default ArticlesHome;
