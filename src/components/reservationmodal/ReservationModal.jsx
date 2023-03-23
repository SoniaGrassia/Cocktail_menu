import { useState } from "react";
import styles from "./index.module.scss";

const ReservationModal = ({ setCloseModal }) => {
  const [surname, setSurname] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  const onHanldeSurname = (e) => setSurname(e.target.value);
  const onHandleDate = (e) => setDate(e.target.value);
  const onHandleTime = (e) => setTime(e.target.value);

  const onHandleClose = () => {
    setCloseModal(false);
  };

  const onHandleSubmit = (e) => {
    e.preventDefault();
    setCloseModal(false);
    //allert provvisorio, al suo posto ci andrà il POPUP
    alert(`Prenotazione effettuata per il ${date} alle ore ${time}`);
  };
  return (
    <div className={styles.ReservationModal}>
      <div className={styles.overlay} onClick={onHandleClose}></div>
      <div className={styles.content}>
        <h3 className={styles.title}>Prenota il tuo tavolo per..</h3>
        <form className={styles.form} onSubmit={onHandleSubmit}>
          <label htmlFor="date">Il..</label>
          <input
            className={styles.input}
            type="date"
            name="date"
            id="date"
            value={date}
            onChange={onHandleDate}
            required
          />
          <label htmlFor="time">Alle ore..</label>
          <input
            className={styles.input}
            type="time"
            name="time"
            id="time"
            value={time}
            onChange={onHandleTime}
            required
          />
          <label htmlFor="text">Inserisci il tuo cognome:</label>
          <input
            className={styles.input}
            type="text"
            id="text"
            name="text"
            placeholder="Cognome"
            value={surname}
            onChange={onHanldeSurname}
            required
          />
          <input className={styles.inputBtn} type="submit" value="Prenota" />
        </form>
      </div>
    </div>
  );
};
export default ReservationModal;
