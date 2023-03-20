import "./index.scss";

const obj = {
  idDrink: "11007",
  strDrink: "Margarita",
  strCategory: "Ordinary Drink",
  strDrinkThumb:
    "https://www.thecocktaildb.com/images/media/drink/5noda61589575158.jpg",
  strIngredient1: "Tequila",
  strIngredient2: "Triple sec",
  strIngredient3: "Lime juice",
  strIngredient4: "Salt",
};

const Card = () => {
  return (
    <div className="Card">
      <div className="Card__image-container">
        <img
          className="Card__image"
          src={obj.strDrinkThumb}
          alt={obj.strDrink}
        />
      </div>
      <h1 className="Card__title">{obj.strDrink.toUpperCase()}</h1>
      <div className="Card__ingredients">
        <ul className="Card__ingredients-list">
          <li>{obj.strIngredient1}</li>
          <li>{obj.strIngredient2}</li>
          <li>{obj.strIngredient3}</li>
          <li>{obj.strIngredient4}</li>
        </ul>
      </div>
    </div>
  );
};
export default Card;
