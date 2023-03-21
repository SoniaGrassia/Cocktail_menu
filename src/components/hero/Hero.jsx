import "./index.scss";

const categories = [
  { id: 1, strCategory: "Ordinary Drink" },
  { id: 2, strCategory: "Cocktail" },
  { id: 3, strCategory: "Shake" },
  { id: 4, strCategory: "Other" },
  { id: 5, strCategory: "Cocoa" },
  { id: 6, strCategory: "Shot" },
  { id: 7, strCategory: "Party Drink" },
  { id: 8, strCategory: "Soft Drink" },
];

const Hero = ({ setFilteredList }) => {
  const onHandleClick = (value) => {
    setFilteredList(value);
  };
  return (
    <div className="Hero">
      <ul className="Hero__list">
        {categories.map((category) => (
          <li
            onClick={() => onHandleClick(category.strCategory)}
            className="Hero__item"
            key={category.id}
          >
            {category.strCategory.toUpperCase()}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Hero;
