import React from 'react';
import styles from './Hero9.module.css';

const Hero9 = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <h1>Ready for your next project?</h1>
        <p>Sit elit feugiat turpis sed integer integer accumsan turpis.</p>
        <form className={styles.form}>
          <div className={styles.formGroup}>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" placeholder="Enter your email" />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="message">Message</label>
            <textarea id="message" placeholder="What are you say?"></textarea>
          </div>
          <button type="submit" className={styles.button}>
            Request Demo
          </button>
        </form>
      </div>
    </section>
  );
};

export default Hero9;
