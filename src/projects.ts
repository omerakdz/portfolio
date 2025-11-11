import type { Project } from "./types";

export const projects: Project[] = [
  {
    title: "Portfolio Website",
    description: "Persoonlijke portfolio waar ik mezelf voorstel",
    languages: [
      { name: "React", color: "#61dafb" },
      { name: "TypeScript", color: "#3178c6" },
    ],
    github: "https://github.com/omerakdz/portfolio",
  },
  {
    title: "Fortnite game",
    description:
      "Een interactieve Fortnite pack-opening app gemaakt met Node.js, Express en MongoDB waar de level, vrienden, record etc. van de gebruiker worden opgeslagen in een database.",
    languages: [
      { name: "Node.js", color: "#68a063" },
      { name: "Express", color: "#444444" },
      { name: "MongoDB", color: "#4db33d" },
      { name: "EJS", color: "#a91e50" },
    ],
    github: "https://github.com/omerakdz/ScriptLab",
  },
  {
        title: "Mini Text Adventure Game",
    description: "Een mini game gemaakt met een groepje in C# waarin je keuzes maakt om verder te komen in het verhaal.",
    languages: [
      { name: "C#", color: "#178600" },
      { name: ".NET", color: "#512bd4" },
    ],
    github: "https://github.com/omerakdz/MiniTextAdventure",
  },
  {
    title: "School bib",
    description: "Een schoolbibliotheek gemaakt in C# met OOP-principes.",
    languages: [
      { name: "C#", color: "#178600" },
      { name: ".NET", color: "#512bd4" },
    ],
    github: "https://github.com/omerakdz/schoolbib",
  },
  {
    title: "Webshop",
    description: "Een simpele webshop gemaakt met HTML, CSS en JavaScript.",
    languages: [
      { name: "JavaScript", color: "#f7df1e" },
    ],
    github: "https://github.com/omerakdz/webshop",
  },
  {
    title: "Pokemon project",
    description:
      "Een project gemaakt met Node.js en Express waar je een overzicht krijgt van alle Pokémons, inclusief gegevens wijzigen en opslaan in een MongoDB-database met middlewares.",
    languages: [
      { name: "Node.js", color: "#68a063" },
      { name: "Express", color: "#444444" },
      { name: "MongoDB", color: "#4db33d" },
    ],
    github: "https://github.com/AP-G-1PRO-Webontwikkeling/projectopdracht-omerakdz",
  },
];
