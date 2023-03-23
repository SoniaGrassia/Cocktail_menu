import styles from "./index.module.scss";

const SideMenu = ({ setCloseModal, setIsVisible }) => {
  const onHandleReservationClick = () => {
    setCloseModal(true);
    setIsVisible(false);
  };
  return (
    <div className={styles.SideMenu}>
      <ul className={styles.list}>
        <li className={styles.item}>OUR LOCATIONS</li>
        <li className={styles.item}>ABOUT US</li>
        <li className={styles.item} onClick={onHandleReservationClick}>
          MAKE A RESERVATION
        </li>
      </ul>
    </div>
  );
};
export default SideMenu;
