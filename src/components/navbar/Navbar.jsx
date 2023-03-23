import styles from "./index.module.scss";
import { RxHamburgerMenu } from "react-icons/rx";

const Navbar = ({ setIsVisible, setCloseModal }) => {
  const onHandleHamburgerClick = () => {
    setIsVisible((prev) => !prev);
  };

  const onReservationClick = () => {
    setCloseModal(true);
  };

  return (
    <div className={styles.Navbar}>
      <h3 className={styles.title}>Fresh</h3>

      <ul className={styles.list}>
        <li className={styles.item}>OUR LOCATIONS</li>
        <li className={styles.item}>ABOUT US</li>
        <li className={styles.item} onClick={onReservationClick}>
          MAKE A RESERVATION
        </li>
      </ul>
      <RxHamburgerMenu
        className={styles.hamburger}
        onClick={onHandleHamburgerClick}
      />
    </div>
  );
};
export default Navbar;
