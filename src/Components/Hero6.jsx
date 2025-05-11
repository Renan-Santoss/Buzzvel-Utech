import React from 'react';
import styles from './Hero6.module.css';
import user from '../assets/img/user.png';
import user2 from '../assets/img/user2.png';
import user3 from '../assets/img/user3.png';

const Hero6 = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.title}>
          <h1>What everyone says</h1>
          <div className={styles.arrows}>
            <button className={styles.arrow}>
              <span>&lt;</span>
            </button>
            <button className={styles.arrow}>
              <span>&gt;</span>
            </button>
          </div>
        </div>
        <div className={styles.cards}>
          <div className={styles.card}>
            <p>
              Lacus vestibulum ultricies mi risus, duis non, volutpat nullam
              non. Magna congue nisi maecenas elit aliquet eu sed consectetur.
            </p>
            <div className={styles.user}>
              <img src={user} alt="Hellen Jimmy" />
              <div>
                <strong>Hellen Jimmy</strong>
                <span>Financial Counselor</span>
              </div>
            </div>
          </div>
          <div className={styles.card}>
            <p>
              Odio rhoncus ornare ut quam. Molestie vel duis quis scelerisque ut
              id. In tortor turpis viverra sagittis ultricies nisl, nec tortor.
            </p>
            <div className={styles.user}>
              <img src={user2} alt="Ralph Edwards" />
              <div>
                <strong>Ralph Edwards</strong>
                <span>Math Teacher</span>
              </div>
            </div>
          </div>
          <div className={styles.card}>
            <p>
              Sagittis nunc egestas leo et malesuada urna risus. Morbi proin et
              eros aliquam. Diam tellus, amet, hac imperdiet.
            </p>
            <div className={styles.user}>
              <img src={user3} alt="Helena John" />
              <div>
                <strong>Helena John</strong>
                <span>Psychology Student</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero6;