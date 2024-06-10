import styles from "./cartBar.module.css";

const CartBar = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.searchContainer}>
          <span className="material-symbols-outlined">search</span>
          <input
            className={styles.searchField}
            type="text"
            placeholder="SEARCH..."
          />
        </div>
        <div className={styles.loginContainer}>
          <button className={styles.loginButton}>
            <span className="material-symbols-outlined">account_circle</span>
            Login
          </button>
        </div>
      </div>
    </>
  );
};

export default CartBar;
