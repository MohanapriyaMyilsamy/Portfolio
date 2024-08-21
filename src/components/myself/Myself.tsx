import React from "react";
import styles from "./Myself.module.css";

export const Myself = () => {

  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Mohanapriya</h1>
        <p className={styles.description}>
        I am a front-end developer with 11 months of experience using Next.js and am now ready to expand into backend development. I am currently learning Node.js and MongoDB to enhance my skills and take on full-stack projects.
        </p>
        <a href="#contact" className={styles.contactBtn}>
          Contact
        </a>
      </div>
      <img
        src="assets/myself/Priya.jpg"
        alt="image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
