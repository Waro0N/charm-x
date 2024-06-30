import { useState } from "react";
import styles from "./newArrivalCard.module.css";
import img from "./newarrivalmodel.png";

const NewArrivalCard = () => {
  const [onHover, setOnHover] = useState(false);
  return (
    <>
      <div
        onMouseEnter={() => setOnHover(true)}
        onMouseLeave={() => setOnHover(false)}
        className={styles.container}
      >
        <img src={img} width="317px" height="412px" />

        <div className={onHover ? styles.detailItemHover : styles.detailsItem}>
          {onHover ? (
            <p>View Details</p>
          ) : (
            <>
              <p>SLIM FIT CHINOS</p>
              <p>Rs 45.00</p>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default NewArrivalCard;
