import { useState } from "react";
import styles from "../App.module.css";
import emailjs from "emailjs-com";

//service id: myService
//template id: template_kkyp9z9
// public key: VZBuxzyshYHWiv2Ee

const Contact = () => {
  const [succes, setSucces] = useState("");
  const [error, setError] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    
    emailjs
      .send(
        "myService",
        "template_kkyp9z9",
        {
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        "VZBuxzyshYHWiv2Ee"
      )
      .then(() => {
        setSucces("Bericht succesvol verstuurd");
        setFormData({ name: "", email: "", subject: "", message: "" });

        setTimeout(() => setSucces(""), 5000);
      })
      .catch(() => {
        setError("Er ging iets mis… probeer het opnieuw.");

        setTimeout(() => setError(""), 5000);
      });
  };

  return (
    <div className={styles.contactContainer}>
      {succes && <div className={styles.succes}>{succes}</div>}
      
      {error && <div className={styles.error}>{error}</div>}
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
        <input
          type="text"
          name="subject"
          placeholder="Onderwerp"
          value={formData.subject}
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
