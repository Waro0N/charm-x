import styles from "./catelogyeStyle.module.css";
import image from "../../../assets/images/elegant.jpeg";
const CatelogueCard = () => {
  return (
    <div className={styles.card}>
      <div className={styles.ImageContainer}>
        <img src={image} height="200px" width={"200px"} />
      </div>

      <div className={styles.detailsContainer}>
        <div className={styles.CategoryItem}>dsad</div>
        <div className={styles.detailsItem}>sdasd</div>
        <div className={styles.ColorItems}>sdad</div>
        <div className={styles.buttonsContainer}>sdasd</div>
      </div>
    </div>
  );
};

export default CatelogueCard;
