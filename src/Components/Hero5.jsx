import React, { useEffect, useState } from 'react';
import styles from './Hero5.module.css';
import img from '../assets/img/heart.png';
import img2 from '../assets/img/diamond.png';
import img3 from '../assets/img/chapeu.png';

const Hero5 = () => {
  const [counts, setCounts] = useState([0, 0, 0]);

  useEffect(() => {
    const targetValues = [195, 1000000, 17000000]; // Valores finais
    const duration = 2000; // Duração da animação em milissegundos
    const steps = 60; // Número de passos na animação
    const interval = duration / steps;

    const animateCounts = () => {
      const increments = targetValues.map((value) => value / steps);
      let currentCounts = [0, 0, 0];
      let step = 0;

      const intervalId = setInterval(() => {
        if (step >= steps) {
          clearInterval(intervalId);
          setCounts(targetValues); // Garante que os valores finais sejam exibidos
        } else {
          currentCounts = currentCounts.map((count, index) => count + increments[index]);
          setCounts(currentCounts.map((count) => Math.floor(count))); // Atualiza os valores arredondados
          step++;
        }
      }, interval);
    };

    animateCounts();
  }, []);

  const formatCount = (value, index) => {
    if (index === 1 && value >= 1000000) {
      return '1M'; // Exibe "1M" para o segundo valor
    }
    if (index === 2 && value >= 17000000) {
      return '17M'; // Exibe "17M" para o terceiro valor
    }
    return value.toLocaleString(); // Exibe valores menores normalmente
  };

  return (
    <div className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.wrap}>
          <img src={img} alt="Heart Icon" />
          <h2>{formatCount(counts[0], 0)}</h2>
          <h3>user countries</h3>
        </div>
        <div className={styles.wrap}>
          <img src={img2} alt="Diamond Icon" />
          <h2>{formatCount(counts[1], 1)}</h2>
          <h3>valued teachers</h3>
        </div>
        <div className={styles.wrap}>
          <img src={img3} alt="Graduation Cap Icon" />
          <h2>{formatCount(counts[2], 2)}</h2>
          <h3>happy students</h3>
        </div>
      </div>
    </div>
  );
};

export default Hero5;