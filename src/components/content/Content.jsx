import Card from "../card";
import styles from "./index.module.scss";

const Content = ({ cocktailList, filteredList }) => {
  // console.log(cocktailList);
  return (
    <div className={styles.Content}>
      {cocktailList
        .filter((cocktail) => cocktail.strCategory === filteredList)
        .map((cocktail) => (
          <Card cocktails={cocktail} key={cocktail.idDrink} />
        ))}
    </div>
  );
};
export default Content;
