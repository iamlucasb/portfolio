import { useEffect, useMemo } from "react";
import Particles from "@tsparticles/react";
import { ISourceOptions, MoveDirection, OutMode } from "@tsparticles/engine";

interface Props {
  showParticles: boolean;
  setShowParticles: (value: boolean) => void;
}

const AvatarRain = ({ showParticles, setShowParticles }: Props) => {
  useEffect(() => {
    // Désactiver les particules après 5 secondes
    let interval: NodeJS.Timeout | null = null;

    if (showParticles) {
      interval = setInterval(() => {
        setShowParticles(false);
      }, 8000);
    }

    // Nettoyage
    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, [showParticles, setShowParticles]);

  const options: ISourceOptions = useMemo(
    () => ({
      fullScreen: {
        zIndex: -1,
      },
      fpsLimit: 120,
      particles: {
        move: {
          direction: MoveDirection.bottom,
          enable: true,
          outModes: {
            default: OutMode.out,
          },
          speed: 14,
          straight: false,
        },
        zIndex: {
          value: -1,
        },
        number: {
          density: {
            enable: true,
          },
          value: 100,
        },
        shape: {
          type: "images",
          options: {
            images: {
              src: "images/particle.png",
              width: 500,
              height: 500,
            },
          },
        },
        size: {
          value: { min: 50, max: 100 },
        },
      },
      detectRetina: true,
    }),
    []
  );

  return (
    <>{showParticles ? <Particles id="tsparticles" options={options} /> : ""}</>
  );
};

export default AvatarRain;
