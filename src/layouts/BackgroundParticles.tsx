import { useCallback, useContext } from "react";
import Particles from "react-tsparticles";
import type { Engine } from "tsparticles-engine";
import { loadFull } from "tsparticles";
import styles from "./RootLayout.module.css";
import { ThemeContext } from "../providers/ThemeProvider";

const BackgroundParticles = () => {
  const { theme } = useContext(ThemeContext);
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadFull(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      className={styles.particlesCanvas}
      options={{
        fullScreen: { enable: false },
        background: {
          color: {
            value: "transparent",
          },
        },
        fpsLimit: 120,
        particles: {
          color: {
            value: theme === "light" 
              ? ["#185592", "#0e4781", "#001f3f"] // donkerdere kleuren voor light mode
              : ["#4ac1ff", "#185592", "#0e4781"], // lichtere kleuren voor dark mode
          },
          move: {
            direction: "none",
            enable: true,
            outModes: {
              default: "bounce",
            },
            random: true,
            speed: 0.3,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              area: 600, 
            },
            value: 80, 
          },
          opacity: {
            value: 0.8,
          },
          shape: {
            type: "circle",
          },
          size: {
            value: { min: 1, max: 3 },
          },
        },
        detectRetina: true,
      }}
    />
  );
};

export default BackgroundParticles;