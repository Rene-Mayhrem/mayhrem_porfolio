// eslint-disable-next-line no-unused-vars
import React from "react";
import { getImageUrl } from "../../utils";
import styles from "./Hero.module.css"

const Hero = () => {
  return (
    <section>
      <div>
        <h1>Hi, I am René Cruz</h1>
        <p>
          I am a full-stack developer with 2 years of experience using React and
          Nodejs. Reach out if you would like to learn more!
        </p>
        <a href="mailto:renecruz.0711@gmail.com">Contact Me!</a>
      </div>
      <img src={getImageUrl("hero/heroImage.png")} alt="Hero image of me" />
      <div className={styles.topBlur}></div>
      <div className={styles.bottomBlur}></div>
    </section>
  );
};

export default Hero;
