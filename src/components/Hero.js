import Pic from "../assets/hero-pic.jpg";
import Particles from "react-particles-js";

export default function Hero() {
  var maxParticles = 100;
  
  return (
    <div className="hero">
      <Particles
        id="particles-js"
        options={{
          background: {
            image: {
              value: `${Pic}`,
            },
          },
          fpsLimit: 60,
          interactivity: {
            detectsOn: "canvas",
            events: {
              onClick: {
                enable: true,
                mode: "push",
              },
              onHover: {
                enable: true,
                mode: "grab",
              },
              resize: true,
            },
            modes: {
              grab: {
                distance: 140,
                lineLinked: {
                  opacity: 1,
                },
              },
              bubble: {
                distance: 400,
                duration: 2,
                opacity: 0.8,
                size: 40,
                speed: 3,
              },
              push: {
                quantity: 4,
              },
              repulse: {
                distance: 200,
                duration: 0.4,
              },
            },
          },
          particles: {
            color: {
              value: "#ffffff",
            },
            links: {
              color: "#ffffff",
              distance: 150,
              enable: true,
              opacity: 0.5,
              width: 1,
            },
            collisions: {
              enable: true,
            },
            move: {
              direction: "none",
              enable: true,
              outMode: "out",
              random: false,
              speed: 2,
              straight: false,
              bounce: false,
              attract: {
                enable: false,
                rotateX: 600,
                rotateY: 1200,
              },
            },
            number: {
              value: maxParticles,
              density: {
                enable: true,
                value_area: maxParticles * 10 * 2,
              },
            },
            opacity: {
              value: 0.5,
            },
            shape: {
              type: "circle",
            },
            size: {
              random: true,
              value: 5,
            },
          },
          detectRetina: true,
        }}
      />
      <img src={Pic} alt="Hero-pic" className="hero-pic" />
      <div className="message">
        <h1 className="hero-title">
          Rejoignez l'Elite, <br /> commencez votre <br /> carrière en
          Cyber-Défense
        </h1>
        <p>
          Inscrivez-vous pour une Carrière en CyberDéfense, <br />{" "}
          CyberSécurité, Piratage, DataScience...{" "}
        </p>
        <button>En savoir plus</button>
      </div>
    </div>
  );
}
