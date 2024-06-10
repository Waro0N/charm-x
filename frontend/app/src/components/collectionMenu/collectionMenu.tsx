import styles from "./collectionMenu.module.css";
const CollectionMenu = () => {
  return (
    <>
      <div className={styles.menuContainer}>
        <ul>
          <li>
            <a href="/">T-shirts</a>
          </li>
          <li>
            <a href="/">Shirts</a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default CollectionMenu;
