import React from 'react';
import styles from './Hero8.module.css';
import img from '../assets/img/cards1.png';
import img2 from '../assets/img/cards2.png';

const Hero8 = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.content}>
          <img src={img} alt="/" />
          <div className={styles.wrap}>
            <h1>Join a world of learning</h1>
            <p>
              Malesuada ut aliquam at ac est nisi, interdum etiam dignissim.
            </p>
            <p>Risus elit et fringilla habitant ut facilisi.</p>
            <div className={styles.btn}>
              <button className={styles.button}>Sign Up Now</button>
            </div>
          </div>
          <img src={img2} alt="/" />
        </div>
      </div>
    </section>
  );
};

export default Hero8;
