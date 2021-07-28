import Arrow from "../assets/button-arrow.png";

export default function Inscription() {
  return (
    <div className="inscription">
      <div className="message">
        <h3>Prêt à commencer ?</h3>
        <h1>Votre avenir commence ici !</h1>
      </div>
      <button className="inscription-button">Inscrivez-vous <img src={Arrow} alt="arrow" /> </button>
    </div>
  );
}
