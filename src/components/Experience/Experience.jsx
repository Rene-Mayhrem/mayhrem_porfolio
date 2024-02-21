/* eslint-disable no-unused-vars */
import React from "react";
import skills from "../../data/skills.json";
import history from "../../data/history.json";
import { getImageUrl } from "../../utils";
import styles from './Experience.module.css'

const Experience = () => {
  return (
    <section className={styles.container} id="experience">
      <h2 className={styles.title}>Experience</h2>
      <div className={styles.container}>
        <div className={styles.content}>
          {skills.map((skill, id) => {
            return (
              <div key={id}>
                <div>
                  <img src={getImageUrl(skill.imageSrc)} alt={skill.title} />
                </div>
              </div>
            );
          })}
        </div>
        <ul className="">
          {
            history.map((historyItem, id) => {
              return <li key={id}>
                <img src={getImageUrl(historyItem.imageSrc)} alt={historyItem.organization} />
                <div>
                  <h3>{`${historyItem.role}`}, ${historyItem.organization}</h3>
                  <p>{`${historyItem.startDate} - ${historyItem.endDate}`}</p>
                  <ul>
                    {historyItem.experiences.map((experience, id) => {
                      return <li key={id}>{experience}</li>
                    })}
                  </ul>
                </div>
              </li>
            })
          }
        </ul>
      </div>
    </section>
  );
};

export default Experience;
