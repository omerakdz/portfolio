import { Github, Linkedin } from "lucide-react";
import AnimatedBg from "../components/AnimatedBg";

export default function Home() {
  return (
    <AnimatedBg>
    <div className="home-container">
      <h1>Hallo, ik ben Ömer</h1>
      <p>
        Ik ben een student aan de AP Hogeschool en volg het graduaat Programmeren. 
        Ik ben gepassioneerd over webontwikkeling, moderne technologieën en het bouwen van innovatieve digitale ervaringen.
      </p>
      <div className="social-icons">
        <a href="https://github.com/omerakdz" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
          <Github size={40} />
        </a>
        <a href="https://www.linkedin.com/in/%C3%B6mer-akdeniz/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
          <Linkedin size={40} />
        </a>
      </div>
    </div>
    </AnimatedBg>
  );
}
