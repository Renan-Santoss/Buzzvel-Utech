import React from 'react';
import styles from './Hero2.module.css';
import vec from '../assets/img/veclaranja2.svg';

import seta from '../assets/img/seta.svg';

const Hero2 = () => {
  return (
    <hero className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.txt}>
            <h2>
              <img src={vec} alt="" />
              An all-in-one app that makes it easier
            </h2>
          </div>
          <div className={styles.wrap}>
            <p>✓ Est et in pharetra magna adipiscing ornare aliquam.</p>
            <p>✓ Tellus arcu sed consequat ac velit ut eu blandit.</p>
            <p>✓ Ullamcorper ornare in et egestas dolor orci.</p>
            <div className={styles.txtblue}>
              <a href="#">Find more about the app</a>
              <img src={seta} alt="" />
            </div>
          </div>
        </div>
        <div className={styles.cards}>
          <div className={styles.cardflex}>
            <div className={styles.cardf}>
              <h3>Featured</h3>
              <h2>The map of mathematics</h2>
              <p>
                Egestas elit dui scelerisque ut eu purus aliquam vitae
                habitasse.
              </p>
              <div className={styles.btn}>
                <button>Take Lesson</button>
              </div>
            </div>
            <div className={styles.cardp}>
              <h3>Popular</h3>
              <h2>Design for how people think</h2>
              <p>
                Aliquam ut euismod condimentum elementum ultricies volutpat sit
                non.
              </p>
              <div className={styles.btn}>
                <button>Take Lesson</button>
              </div>
            </div>
            <div className={styles.cardn}>
              <h3>New</h3>
              <h2>International & commercial law</h2>
              <p>
                Molestie integer eu arcu, mauris bibendum rhoncus imperdiet dui.
              </p>
              <div className={styles.btn}>
                <button>Take Lesson</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </hero>
  );
};

export default Hero2;
