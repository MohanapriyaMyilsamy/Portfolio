import React, { useState } from "react";
import styles from "./Contact.module.css";
import emailjs from "emailjs-com";

export const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [error, setError] = useState("");

  const validation = () => {
    if (!form.name.trim()) {
      return "Name field is required";
    }
    if (!form.email.trim()) {
      return "Email field is required";
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      return "Invalid email format";
    }
    if (!form.message.trim()) {
      return "Message field is required";
    }
    return "";
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errorMsg = validation();
    if (errorMsg) {
      setError(errorMsg);
      return;
    }
    setError("");

    emailjs
      .send(
        "service_wqh3tig",
        "template_48vcqmm",
        {
          to_name: "Mohanapriya Myilsamy",
          from_name: form.name,
          from_email: form.email,
          reply_to: form.email,
          message: form.message,
        },
        "fkETSlSYS4KrLFRmQ"
      )
      .then((response) => {
        alert("Form submitted successfully");
        setForm({ name: "", email: "", message: "" });
      })
      .catch((error) => {
        console.error("Failed to send email:", error);
        alert("Failed to send the form. Please try again.");
      });
  };

  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
      </div>
      <div className={styles.ContactContainer}>
        {error && <div className={styles.ErrorMessage}>{error}</div>}
        <form onSubmit={handleSubmit} className={styles.Form}>
          <label htmlFor="name" className={styles.Lable}>
            Name
          </label>
          <input
            type="text"
            name="name"
            placeholder="Your name"
            value={form.name}
            onChange={handleChange}
            className={styles.Input}
          />

          <label htmlFor="email" className={styles.Lable}>
            Email
          </label>
          <input
            type="email"
            name="email"
            placeholder="Your email"
            value={form.email}
            onChange={handleChange}
            className={styles.Input}
          />

          <label htmlFor="message" className={styles.Lable}>
            Message
          </label>
          <textarea
            name="message"
            placeholder="Your message"
            value={form.message}
            onChange={handleChange}
            className={styles.Textarea}
          />

          <button type="submit" className={styles.Button}>
            Send Message
          </button>
        </form>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img
            src="assets/contact/emailIcon.png"
            alt="Email icon"
            height="30px"
            width="30px"
          />
          <a href="mailto:mohanapriyajuly@gmail.com" target="_blank">
            Gmail
          </a>
        </li>
        <li className={styles.link}>
          <img
            src="assets/contact/linkedinIcon.png"
            alt="LinkedIn icon"
            height="30px"
            width="30px"
          />
          <a
            href="https://www.linkedin.com/in/mohanapriyamyilsamy31/"
            target="_blank"
          >
            linkedin
          </a>
        </li>
        <li className={styles.link}>
          <img
            src="assets/contact/githubIcon.png"
            alt="Github icon"
            height="30px"
            width="30px"
          />
          <a href="https://github.com/MohanapriyaMyilsamy" target="_blank">
            {" "}
            GitHub
          </a>
        </li>
      </ul>
    </footer>
  );
};
