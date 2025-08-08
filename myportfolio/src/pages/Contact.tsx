export default function Contact() {
  return (
    <div className="contact-container">
      <h1>Contact</h1>
      <form className="contact-form">
        <input type="text" placeholder="Naam" required />
        <input type="email" placeholder="E-mail" required />
        <input type="text" placeholder="Onderwerp" required />
        <textarea placeholder="Bericht" rows={5} required></textarea>
        <button type="submit">Verstuur</button>
      </form>
      <p className="contact-email">📧 omerakdeniz1208@gmail.com</p>
    </div>
  );
}
