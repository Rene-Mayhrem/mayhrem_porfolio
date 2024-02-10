// eslint-disable-next-line no-unused-vars
import React from "react";
import { getImageUrl } from "../../utils";
import styles from "./Hero.module.css"

const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I am René Cruz</h1>
        <p className={styles.description}>
          I am a full-stack developer with 2 years of experience using React and
          Nodejs. Reach out if you would like to learn more!
        </p>
        <a href="mailto:renecruz.0711@gmail.com" className={styles.contactBtn}>Contact Me!</a>
      </div>
      <img className={styles.heroImg} src={getImageUrl("hero/heroImage.png")} alt="Hero image of me" />
      <div className={styles.topBlur}></div>
      <div className={styles.bottomBlur}></div>
    </section>
  );
};

export default Hero;
