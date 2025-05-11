import React from 'react';
import styles from './Footer.module.css';
import logo from '../assets/img/logof.svg';
import english from '../assets/img/english.svg';
import euro from '../assets/img/euro.svg';
import accessibility from '../assets/img/accessibility.svg';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.topBar}>
          <div className={styles.logoSection}></div>
          <div className={styles.links}>
            <div className={styles.logo}>
              <img src={logo} alt="Logo" /> teach
            </div>
            <div>
              <h3>Product</h3>
              <ul>
                <li>
                  <a href="#">Pricing</a>
                </li>
                <li>
                  <a href="#">Overview</a>
                </li>
                <li>
                  <a href="#">Browse</a>
                </li>
                <li>
                  <a href="#">
                    Accessibility <span className={styles.beta}>BETA</span>
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3>Solutions</h3>
              <ul>
                <li>
                  <a href="#">Brainstorming</a>
                </li>
                <li>
                  <a href="#">Ideation</a>
                </li>
                <li>
                  <a href="#">Wireframing</a>
                </li>
                <li>
                  <a href="#">Research</a>
                </li>
              </ul>
            </div>
            <div>
              <h3>Resources</h3>
              <ul>
                <li>
                  <a href="#">Help Center</a>
                </li>
                <li>
                  <a href="#">Blog</a>
                </li>
                <li>
                  <a href="#">Tutorials</a>
                </li>
                <li>
                  <a href="#">FAQs</a>
                </li>
              </ul>
            </div>
            <div>
              <h3>Support</h3>
              <ul>
                <li>
                  <a href="#">Contact Us</a>
                </li>
                <li>
                  <a href="#">Developers</a>
                </li>
                <li>
                  <a href="#">Documentation</a>
                </li>
                <li>
                  <a href="#">Integrations</a>
                </li>
              </ul>
            </div>
            <div>
              <h3>Company</h3>
              <ul>
                <li>
                  <a href="#">About</a>
                </li>
                <li>
                  <a href="#">Press</a>
                </li>
                <li>
                  <a href="#">Events</a>
                </li>
                <li>
                  <a href="#">
                    Request Demo <span className={styles.arrow}>&rarr;</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className={styles.bottomBar}>
          <div className={styles.bottomContent}>
            <div className={styles.bottomText}>
              <p>uteach © 2023. All rights reserved.</p>
            </div>
            <div className={styles.bottomLinks}>
              <a href="#">Terms</a>
              <a href="#">Privacy</a>
              <a href="#">Contact</a>
              <a href="#">
                <img src={english} alt="English" className={styles.icon} /> EN
              </a>
              <a href="#">
                <img src={euro} alt="Euro" className={styles.icon} /> EUR
              </a>
              <a href="#">
                <img
                  src={accessibility}
                  alt="Accessibility"
                  className={styles.icon}
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
