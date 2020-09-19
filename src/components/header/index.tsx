import React, { useState } from "react";
import { FaAlignRight } from "react-icons/fa";
import styles from "./index.module.scss";

const Header: React.FC = () => {
  const [isNavShown, showNav] = useState<boolean>(false);

  const handleToggle = (): void => showNav(!isNavShown);

  return (
    <header className={styles.header}>
      <div className={styles.headerContainer}>
        <div className={styles.headerLogo}>
          <a href="#">Creative-test</a>
        </div>
        <button type="button" className={styles.navBtn} onClick={handleToggle}>
          <FaAlignRight className={styles.navIcon} />
        </button>
        <nav
          className={`${styles.mainNav}  ${isNavShown ? styles.showNav : ''}`}
        >
          <ul className={styles.navList}>
            <li>
              <a href="#">Продажа</a>
            </li>
            <li>
              <a href="#">Аренда</a>
            </li>
            <li>
              <a href="#">Новостройки</a>
            </li>
            <li>
              <a href="#">Ипотека</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
