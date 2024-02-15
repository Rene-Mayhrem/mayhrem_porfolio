/* eslint-disable no-unused-vars */
import React from "react";
import { getImageUrl } from "../../utils";
import styles from "./About.module.css";

const About = () => {
  return (
    <section className={styles.container}>
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/aboutImage.png")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage }
        />
        <ul className={styles.aboutItems}>
          <li  className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor" />
            <div className={styles.aboutItemText}>
              <h3>Frontend developer</h3>
              <p>
                I am a frontend developer withy experience in building
                responsive and optimized sites
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon.png")} alt="Cursor" />
            <div className={styles.aboutItemText}>
              <h3>Backend developer</h3>
              <p>
                I am a backend developer with experience developing fast and
                optimized backend systems and APIs
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/uiIcon.png")} alt="Cursor" />
            <div className={styles.aboutItemText}>
              <h3>UX/UX Designer</h3>
              <p>
                I have designed multiple landing pages and have systems as well
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default About;
