import React from 'react';
import styles from './Hero3.module.css';
import foto from '../assets/img/Col.png';
const Hero3 = () => {
  return (
    <div className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.txt}>
          <h2>
            Id urna, nisl, ut quam. Diam suspendisse fringilla quam arcu mattis
            est velit in. Nibh in purus sit convallis phasellus ut. At vel erat
            ultricies commodo. Neque suspendisse a habitasse commodo.
          </h2>
          <p>
            Marie Poirot, <span>Bigapp</span>
          </p>
        </div>
        <div className={styles.img}>
          <img src={foto} alt="/" />
        </div>
      </div>
    </div>
  );
};

export default Hero3;
