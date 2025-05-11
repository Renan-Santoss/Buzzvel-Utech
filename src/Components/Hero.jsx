import React from 'react';
import styles from './Hero.module.css';
import vec from '../assets/img/veclaranja.svg';
import vecvideo from '../assets/img/vecvideo.svg';
import vec1 from '../assets/img/vec1.svg';
import vec2 from '../assets/img/vec2.svg';
import vec3 from '../assets/img/vec3.svg';
import vec4 from '../assets/img/vec4.svg';
import vec5 from '../assets/img/vec5.svg';
import img from '../assets/img/img.png';

const Hero = () => {
  return (
    <hero className={styles.hero}>
      <div className={styles.grid}>
        <div className={styles.container}>
          <div className={styles.vec}>
            <img src={vec} alt=" " />
            <h1>Teach students worldwide</h1>
          </div>
          <div className={styles.textp}>
            <p>Amet nunc diam orci duis ut sit diam arcu, nec.</p>
            <p>Eleifend proin massa tincidunt viverra lectus pulvinar.</p>
            <p>Nunc ipsum est pellentesque turpis ultricies.</p>
          </div>
          <div className={styles.button}>
            <button>Sign Up Now</button>
            <div className={styles.btn}>
              <img src={vecvideo} alt="Video" />
              <a href="#">View Demo</a>
            </div>
          </div>
          <div className={styles.text}>
            <p>
              Trust by <br />
              leading companies
            </p>
            <div className={styles.flexvec}>
              <img src={vec1} alt="/" />
              <img src={vec2} alt="/" />
              <img src={vec3} alt="/" />
              <img src={vec4} alt="/" />
              <img src={vec5} alt="/" />
            </div>
          </div>
        </div>
        <div>
          <img src={img} alt="/" />
        </div>
      </div>
    </hero>
  );
};

export default Hero;
