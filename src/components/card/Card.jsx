import { useState } from "react";
import { extractor } from "../../utils/func";
import styles from "./index.module.scss";

const Card = ({ cocktails }) => {
  const ingredientsData = () => extractor(cocktails, "strIngredient");

  const [isFlipped, setIsFlipped] = useState(false);

  const handleMouseEnter = () => {
    setIsFlipped(true);
  };

  const handleMouseLeave = () => {
    setIsFlipped(false);
  };

  return (
    <div
      className={`${styles.Card} ${isFlipped ? styles.flipped : ""}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className={styles.front}>
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
      <div className={styles.back}>
        <p className={styles.instructions}>
          {cocktails.strInstructionsIT.toUpperCase()}
        </p>
      </div>
    </div>
  );
};

export default Card;
