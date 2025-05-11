import React, { useState } from 'react';
import styles from './Header.module.css';
import Logo from '../assets/img/logo.svg';
import Resources from '../assets/img/resources.svg';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.flex}>
          <a href="#" className={styles.logo}>
            <img src={Logo} alt="logo" />
            teach
          </a>
          <div className={styles.menuIcon} onClick={toggleMenu}>
            ☰
          </div>
          <nav className={`${styles.nav} ${isMenuOpen ? styles.open : ''}`}>
            <ul>
              <li>
                <a href="#">Products</a>
              </li>
              <li>
                <a href="#">Solutions</a>
              </li>
              <li>
                <a href="#">Pricing</a>
              </li>
              <li>
                <div className={styles.flex}>
                  <div className={styles.rs}>
                    <a href="#">Resources</a>
                    <img src={Resources} alt="#" />
                  </div>
                </div>
              </li>
            </ul>
          </nav>
          <div className={styles.login}>
            <a href="#">Log In</a>
            <button>Sign Up Now</button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
