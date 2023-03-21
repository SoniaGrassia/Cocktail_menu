import { useState, useEffect } from "react";
import { GET } from "./utils/http";
import Navbar from "./components/navbar";
import Hero from "./components/hero";
import Content from "./components/content";
import "./App.scss";

function App() {
  const [cocktailList, setCocktailList] = useState([]);
  const [filteredList, setFilteredList] = useState("Ordinary Drink");

  useEffect(() => {
    GET("search.php?f=s").then(({ drinks }) => {
      setCocktailList(() => drinks);
    });
  }, []);
  return (
    <div className="App">
      <Navbar />
      <Hero setFilteredList={setFilteredList} />
      <Content cocktailList={cocktailList} filteredList={filteredList} />
    </div>
  );
}

export default App;
