import styles from "./index.module.scss";

const Details = () => {
  return (
    <div className={styles.Details}>
      <div className={styles.containerImage}>
        <img
          className={styles.image}
          src="https://www.thecocktaildb.com/images/media/drink/2x8thr1504816928.jpg"
          alt=""
        />
      </div>
      <div className={styles.containerText}>
        <h1 className={styles.title}>strDrink</h1>
        <p className={styles.category}>strCategory</p>
        <p className={styles.glass}>strGlass</p>
        <p className={styles.ingredients}>strIngredient</p>
        <p className={styles.instructions}>strInstructionsIT</p>
      </div>
    </div>
  );
};
export default Details;
