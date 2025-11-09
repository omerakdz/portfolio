import styles from "../App.module.css";
import type { Project } from "../types";
import { projects } from "../projects";
import githubIcon from "../assets/github2.png";

const Projects = () => {
  return (
    <div className={styles.projectsContent}>
      <h1>mijn projecten</h1>
      <article className={styles.projectsContainer}>
        {projects.map((project) => (
          <section key={project.title}>
            <h2>{project.title}</h2>
            <p>{project.description}</p>

            <article className={styles.languageContainer}>
              {project.languages.map((lang) => (
                <p
                  key={lang.name}
                  className={styles.languageBadge}
                  style={{ backgroundColor: lang.color }}
                >
                  {lang.name}
                </p>
              ))}
              <a title="repo link" href={project.github}>
                <img
                  className={styles.githubImg}
                  src={githubIcon}
                  alt="github link"
                />
              </a>
            </article>
          </section>
        ))}
      </article>
    </div>
  );
};

export default Projects;
