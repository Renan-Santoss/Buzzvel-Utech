import React from 'react';
import styles from './Hero7.module.css';
import vec from '../assets/img/vec7.svg';
import seta from '../assets/img/seta.svg';

const Hero7 = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.wrap}>
            <img src={vec} alt="" />
            <h2>All the cool features</h2>
          </div>
          <div className={styles.flex}>
            <div className={styles.txtcollum}>
              <div className={styles.txt}>
                <p>
                  Mauris consequat, cursus pharetra et, habitasse rhoncus quis odio ac. In et dolor eu donec maecenas nulla. Cum sed orci, sit pellentesque quisque feugiat cras ullamcorper. Ultrices in amet, ullamcorper non viverra a, neque orci.
                </p>
              </div>
              <div className={styles.title}>
                <a href="#">View all the features </a>
                <img src={seta} alt="#" />
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero7;
