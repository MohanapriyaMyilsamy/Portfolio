import React from "react";

import styles from "./About.module.css";
import image from '../../../public/assets/about/aboutImage.png'


export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src="assets/about/aboutImage.png"
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src="assets/about/cursorIcon.png" alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>Frontend Development</h3>
              <p>
                I am a passionate and detail-oriented Frontend Developer with a strong foundation in creating responsive and user-friendly web applications.With expertise in modern frontend technologies like React, Next.js, and Styled-components, I specialize in building clean, efficient, and scalable code.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src="assets/about/serverIcon.png" alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3>Backend Development</h3>
              <p>
                I am actively expanding my skill set into backend development.Now, i am focusing on Node.js and MongoDB to build robust and scalable server-side applications. As I delve into backend technologies, I am learning how to manage databases, handle server requests, and create APIs that connect seamlessly with frontend interfaces.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
