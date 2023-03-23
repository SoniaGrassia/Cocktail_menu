import { useState, useEffect } from "react";
import { GET } from "./utils/http";
import Navbar from "./components/navbar";
import Hero from "./components/hero";
import Content from "./components/content";
import Details from "./components/details";
import SideMenu from "./components/sidemenu";
import ReservationModal from "./components/reservationmodal";
import styles from "./App.module.scss";

function App() {
  const [cocktailList, setCocktailList] = useState([]);
  const [filteredList, setFilteredList] = useState("Ordinary Drink");
  const [isVisible, setIsVisible] = useState(false);
  const [closeModal, setCloseModal] = useState(false);

  useEffect(() => {
    GET("search.php?f=s").then(({ drinks }) => {
      setCocktailList(() => drinks);
    });
  }, []);
  return (
    <div className={styles.App}>
      <Navbar setIsVisible={setIsVisible} setCloseModal={setCloseModal} />
      {isVisible && (
        <SideMenu setCloseModal={setCloseModal} setIsVisible={setIsVisible} />
      )}
      {closeModal && <ReservationModal setCloseModal={setCloseModal} />}
      {/* <Details /> */}
      <Hero setFilteredList={setFilteredList} />
      <Content cocktailList={cocktailList} filteredList={filteredList} />
    </div>
  );
}

export default App;
