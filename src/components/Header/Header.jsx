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
             <li><a href="#">Home</a></li>
             <li><a href="#">Features</a></li>
             <li><a href="#">Princing</a></li>
             <li><a href="#">Contact</a></li>
             <button className={styles.Buttonlogin}>Login</button>
             <button className={styles.ButtonSignins}>Sign in</button>
             </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;