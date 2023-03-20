import Card from "../card";
import "./index.scss";

const Content = ({ cocktailList }) => {
  return (
    <div className="Content">
      {cocktailList.map((cocktail) => (
        <Card cocktail={cocktail} />
      ))}
    </div>
  );
};
export default Content;
