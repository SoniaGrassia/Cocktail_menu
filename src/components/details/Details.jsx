import "./index.scss";

const Details = () => {
  return (
    <div className="Details">
      <div className="Details__container-image">
        <img
          className="Details__image"
          src="https://www.thecocktaildb.com/images/media/drink/2x8thr1504816928.jpg"
          alt=""
        />
      </div>
      <div className="Details__container-text">
        <h1 className="Details__title">strDrink</h1>
        <p className="Details__category">strCategory</p>
        <p className="Details__glass">strGlass</p>
        <p className="Details__ingredients">strIngredient</p>
        <p className="Details__instructions">strInstructionsIT</p>
      </div>
    </div>
  );
};
export default Details;
