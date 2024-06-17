import styles from "./footer.module.css";

const Footer = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.item1}>Charm-x Logo</div>
        <div className={styles.item2}>
          <span>CUSTOMER CARE</span>
          <ul>
            <li className={styles.list}>
              <a>Shipping Policy</a>
            </li>
            <li className={styles.list}></li>
            <li className={styles.list}>
              <a>Returns Policy</a>
            </li>
            <li className={styles.list}>
              <a>Contact US</a>
            </li>
            <li className={styles.list}>
              <a>About Us</a>
            </li>
          </ul>
        </div>
        <div className={styles.item3}>ads</div>
        <div className={styles.item4}>STAY CONNECTED</div>
      </div>
      <div className={styles.containerFooter}>
        <span className={styles.copyRight}>@Company Name 2024</span>
      </div>
    </>
  );
};

export default Footer;
