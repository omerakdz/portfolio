import AnimatedBg from "../components/AnimatedBg";
export default function About() {
  return (
    <AnimatedBg>
    <div className="about-container">
      <h1>Over Mij</h1>
      
      <section className="about-section">
        <h2>Wie ben ik?</h2>
        <p>
          Ik ben Ömer, een gemotiveerde programmeur in opleiding aan de AP Hogeschool.
          Mijn passie ligt bij het ontwikkelen van moderne, gebruiksvriendelijke en efficiënte webapplicaties.
          Ik werk graag zowel aan frontend als backend projecten en blijf continu nieuwe technologieën leren en toepassen.
        </p>
      </section>
      
      <section className="about-section">
        <h2>Mijn vaardigheden</h2>
        <ul>
          <li>Frontend: React, Angular, TypeScript, HTML5, CSS3</li>
          <li>Backend: Node.js, Express, MongoDB, SQL</li>
          <li>Tools: Git, Docker, VSCode</li>
          <li>Passies: Clean code, responsive design, UX/UI</li>
        </ul>
      </section>
      
      <section className="about-section">
        <h2>Mijn doelen</h2>
        <p>
          Mijn doel is om een veelzijdige fullstack developer te worden die met moderne technologieën
          en best practices bijdraagt aan innovatieve projecten. Ik streef ernaar om altijd te blijven leren
          en mezelf te verbeteren in zowel technische skills als teamwork.
        </p>
      </section>
    </div>
    </AnimatedBg>
  );
}