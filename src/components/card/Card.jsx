import "./index.scss";

const Card = ({ cocktails }) => {
  const onHandleClick = () => {
    console.log(cocktails);
  };
  return (
    <div className="Card" onClick={onHandleClick}>
      <img
        className="Card__image"
        src={cocktails.strDrinkThumb}
        alt={cocktails.strDrink}
      />
      <div className="Card__description">
        <h1 className="Card__title">{cocktails.strDrink.toUpperCase()}</h1>
        <ul className="Card__ingredients-list">
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
