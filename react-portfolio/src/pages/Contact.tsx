import { useState } from "react";
import styles from "../App.module.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);

    alert("Bedankt voor je bericht!");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className={styles.contactContainer}>
      <h1>Contacteer mij</h1>
      <form onSubmit={handleSubmit} className={styles.contactForm}>
        <input
          type="text"
          name="name"
          placeholder="Naam"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="E-mail"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <textarea
          name="message"
          placeholder="Bericht"
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>
        <button type="submit">Verstuur</button>
      </form>
      <p>omerakdeniz1208@gmail.com</p>
    </div>
  );
};

export default Contact;
