/* eslint-disable no-unused-vars */
import React from "react";
import skills from "../../data/skills.json";
import history from "../../data/history.json";
import { getImageUrl } from "../../utils";

const Experience = () => {
  return (
    <section className="" id="experience">
      <h2>Experience</h2>
      <div className="">
        <div className="">
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
        <ul className=""></ul>
      </div>
    </section>
  );
};

export default Experience;
