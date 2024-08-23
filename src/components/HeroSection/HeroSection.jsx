import React from 'react';
import styles from './HeroSection.module.css';
import Sistema from '../../assets/Sistema.png';

const HeroSection = () => {
  return (
    <section className={styles.heroSection}>
      <h1 className={styles.title}>
        Streamline Your <span className={styles.highlight}>Business Finance</span> with Us
      </h1>
      <p className={styles.description}>
        Simplify business finances with our efficient, user-friendly financial tracking app.
      </p>
      <button className={styles.ctaButton}>Iniciar teste grátis</button>
      <div className={styles.imageContainer}>
        <img src={Sistema} alt="Sistema" className={styles.image} />
      </div>
    </section>
  );
};

export default HeroSection;