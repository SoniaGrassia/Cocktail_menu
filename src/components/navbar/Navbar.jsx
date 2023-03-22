import styles from "./index.module.scss";
import { RxHamburgerMenu } from "react-icons/rx";

const Navbar = () => {
  return (
    <div className={styles.Navbar}>
      <h3 className={styles.title}>Fresh</h3>

      <ul className={styles.list}>
        <li className={styles.item}>MENU</li>
        <li className={styles.item}>OUR LOCATIONS</li>
        <li className={styles.item}>ABOUT US</li>
        <li className={styles.item}>CONTACT</li>
      </ul>
      <RxHamburgerMenu className={styles.hamburger} />
    </div>
  );
};
export default Navbar;
