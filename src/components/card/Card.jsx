import styles from "./index.module.scss";

const Card = ({ cocktails }) => {
  const onHandleClick = () => {
    console.log(cocktails);
  };
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
          <li>{cocktails.strIngredient1}</li>
          <li>{cocktails.strIngredient2}</li>
          <li>{cocktails.strIngredient3}</li>
          <li>{cocktails.strIngredient4}</li>
        </ul>
      </div>
    </div>
  );
};
export default Card;
