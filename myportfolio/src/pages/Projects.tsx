import AnimatedBg from "../components/AnimatedBg";
export default function Projects() {
  return (
    <AnimatedBg>
    <div className="projects-container">
      <h1>Projecten</h1>

      <section className="project">
        <h2>Webshop</h2>
        <p>Een moderne webshop gebouwd met Angular en Node.js.</p>
        <div className="languages">
          <span className="language-badge language-angular">Angular</span>
          <span className="language-badge language-nodejs">Node.js</span>
          <span className="language-badge language-typescript">TypeScript</span>
        </div>
      </section>

      <section className="project">
        <h2>Fortnite Game</h2>
        <p>Een multiplayer game gebouwd met TypeScript, Node.js, Express en MongoDB.</p>
        <div className="languages">
          <span className="language-badge language-typescript">TypeScript</span>
          <span className="language-badge language-nodejs">Node.js</span>
          <span className="language-badge language-express">Express</span>
          <span className="language-badge language-mongodb">MongoDB</span>
        </div>
      </section>

      <section className="project">
        <h2>Dit Project</h2>
        <p>De portfolio website gebouwd met React en TypeScript.</p>
        <div className="languages">
          <span className="language-badge language-react">React</span>
          <span className="language-badge language-typescript">TypeScript</span>
        </div>
      </section>
    </div>
    </AnimatedBg>
  );
}