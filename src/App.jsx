import { useState, useEffect } from "react";
import { GET } from "./utils/http";
import Navbar from "./components/navbar";
import Hero from "./components/hero";
import Content from "./components/content";
import "./App.scss";

function App() {
  const [cocktailList, setCocktailList] = useState([]);

  useEffect(() => {
    GET("search.php?f=s").then(({ drinks }) => {
      setCocktailList(() => drinks);
    });
  }, []);
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Content cocktailList={cocktailList} />
    </div>
  );
}

export default App;
