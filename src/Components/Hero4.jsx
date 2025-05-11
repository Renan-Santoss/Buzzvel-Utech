import React from 'react';
import styles from './Hero4.module.css';
import img from '../assets/img/img1.png';
import img2 from '../assets/img/img2.png';
import img3 from '../assets/img/img3.png';
import img4 from '../assets/img/img4.png';
import seta from '../assets/img/seta.svg';

const Hero4 = () => {
  return (
    <div className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.imgflex}>
          <img src={img} alt="" />
          <img src={img2} alt="" />
          <img src={img3} alt="" />
          <img src={img4} alt="" />
        </div>
        <div className={styles.flex}>
          <div className={styles.txt}>
            <h2>Meet international students & teachers</h2>
            <p>
              Morbi sit egestas dignissim pharetra, sed amet. Tempus justo
              senectus risus ac vel, velit, nunc. Eget commodo eget in aliquam
              facilisi facilisi nec magna hendrerit. Placerat ipsum sit tellus
              urna, faucibus aenean lorem faucibus integer.
            </p>
          </div>
          <div className={styles.btn}>
            <a href="#">
              Explore teachers and students
            </a>
            <img src={seta} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero4;
