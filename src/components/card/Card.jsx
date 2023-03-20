import "./index.scss";

const Card = ({ cocktail }) => {
  return (
    <div className="Card">
      <img
        className="Card__image"
        src={cocktail.strDrinkThumb}
        alt={cocktail.strDrink}
      />
      <div className="Card__description">
        <h1 className="Card__title">{cocktail.strDrink.toUpperCase()}</h1>
        <ul className="Card__ingredients-list">
          <li>{cocktail.strIngredient1}</li>
          <li>{cocktail.strIngredient2}</li>
          <li>{cocktail.strIngredient3}</li>
          <li>{cocktail.strIngredient4}</li>
        </ul>
      </div>
    </div>
  );
};
export default Card;
