import { extractor } from "../../utils/func";
import styles from "./index.module.scss";

const Card = ({ cocktails }) => {
  const onHandleClick = () => {
    console.log(cocktails);
  };

  const ingredientsData = () => extractor(cocktails, "strIngredient");
  return (
    <div className={styles.Card} onClick={onHandleClick}>
      <img
        className={styles.image}
        src={cocktails.strDrinkThumb}
        alt={cocktails.strDrink}
      />
      <div className={styles.description}>
        <h1 className={styles.title}>{cocktails.strDrink.toUpperCase()}</h1>
        <ul className={styles.ingredientsList}>
          {ingredientsData().map((ingredient) => (
            <li key={ingredient}>{ingredient}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};
export default Card;
