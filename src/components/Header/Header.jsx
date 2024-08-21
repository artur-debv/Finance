import React from 'react';
import styles from './Header.module.css';
import logo from "../../assets/logo.svg";

const Header = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <div className={styles.logo}>
          <img src={logo} alt="Expentory.me Logo" />
        </div>
        <div className={styles.link}>
             <ul>
             <li><a href="#">Contact</a></li>
             <li><a href="#">Contact</a></li>
             <li><a href="#">Contact</a></li>
             <li><a href="#">Contact</a></li>
             </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;