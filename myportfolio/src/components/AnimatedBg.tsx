import { useEffect, useRef, useState, ReactNode } from "react";
import * as THREE from "three";
import NET from "vanta/dist/vanta.net.min";

interface BackgroundProps {
  children?: ReactNode;
}

export default function Background({ children }: BackgroundProps) {
  const vantaRef = useRef<HTMLDivElement>(null);
  const [vantaEffect, setVantaEffect] = useState<any>(null);

  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        NET({
          el: vantaRef.current,
          THREE: THREE,
          mouseControls: false,
          touchControls: false,
          gyroControls: false,
          minHeight: 200.0,
          minWidth: 200.0,
          scale: 1.0,
          scaleMobile: 1.0,
          color: 0x1da1f2, // kleur van de punten
          backgroundColor: 0x000000, // zwarte achtergrond
          points: 10.0,
          maxDistance: 0.0, // geen lijnen
          spacing: 20.0,
        })
      );
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  return (
    <div
      ref={vantaRef}
     style={{
        width: "100%",
        height: "100vh", // full viewport height
        position: "fixed", // fixed zodat het altijd achterblijft
        top: 0,
        left: 0,
        zIndex: 0,
    }}
    >
      {children && <div style={{ zIndex: 1 }}>{children}</div>}
    </div>
  );
}
