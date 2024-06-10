import styles from "./navBar.module.css";
// import logo from "../../assets/react.svg";
import CollectionMenu from "../collectionMenu/collectionMenu";
import { useState } from "react";

const NavBar = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <>
      <div className={styles.container}>
        <div className={styles.navItemsContainer}>
          <div className={styles.logo}>
            <p>Charm-X</p>
          </div>
          <a className={styles.navItems} href="/">
            HOME
          </a>
          <div
            onMouseLeave={() => setShowMenu(false)}
            onMouseEnter={() => setShowMenu(true)}
            className={styles.navItems}
          >
            <p>COLLECTIONS</p>
            {showMenu && <CollectionMenu />}
          </div>

          <a className={styles.navItems} href="/">
            ABOUT
          </a>
          <a className={styles.navItems} href="/">
            CONTACT US
          </a>
        </div>
      </div>
    </>
  );
};

export default NavBar;
