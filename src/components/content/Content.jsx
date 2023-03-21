import { useState } from "react";
import Card from "../card";
import "./index.scss";

const Content = ({ cocktailList, filteredList }) => {
  console.log(cocktailList);
  return (
    <div className="Content">
      {cocktailList
        .filter((cocktail) => cocktail.strCategory === filteredList)
        .map((cocktail) => (
          <Card cocktail={cocktail} key={cocktail.idDrink} />
        ))}
    </div>
  );
};
export default Content;
