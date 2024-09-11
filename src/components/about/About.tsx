import React from "react";

import styles from "./About.module.css";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About Me</h2>
      <div className={styles.content}>
        <img
          src="assets/myself/Priya.jpg"
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <div className={styles.aboutItemText}>
          <p>
            Hi, I'm Mohanapriya. I’m a passionate and enthusiastic software
            Engineer with 1 year of experience at Genpixels Tech Pvt Ltd in
            Coimbatore.
          </p>
          <p>
            I am a passionate and detail-oriented Frontend Developer with a
            strong foundation in creating responsive and user-friendly web
            applications. Expertise in modern frontend technologies like React,
            Next.js, and Styled-components, I specialize in building clean,
            efficient, and scalable code.
          </p>
          <p>
            I am actively expanding my skill set into backend development.Now, i
            am focusing on Node.js and MongoDB to build robust and scalable
            server-side applications.
          </p>
        </div>
      </div>
    </section>
  );
};
