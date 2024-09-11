import React from "react";
import styles from "./Myself.module.css";
import { FaDownload } from "react-icons/fa";

export const Myself = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>
          Hi, I&apos;m <span>Mohanapriya Myilsamy</span>
        </h1>
        <h2 className={styles.description}>I&apos;m a professional <span>Software Engineer</span> with 1 year of experience</h2>
        <div>
          <a href="#contact" className={styles.contactBtn}>
            Contact
          </a>
          <a
            href="https://drive.google.com/uc?export=download&id=1ympD-7QssIPKSzuIrPpAei8lp1FgYDcu"
            className={styles.resumeBtn}
          >
            Resume{" "}
            <FaDownload
              style={{ position: "relative", top: "2px", fontSize: "15px" }}
            />
          </a>
        </div>
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
