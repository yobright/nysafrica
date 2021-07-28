import SecurityPic from "../assets/security-pic.svg";
import NetworkPic from "../assets/network-pic.svg";
import DatabasePic from "../assets/data-pic.svg";
import ServerPic from "../assets/server-pic.svg";

export default function Certificat() {
  return (
    <div className="certificat">
      <div className="wrapper-certificat">
        <div className="title-certificat">
          <h3>Nos domaines de certifications</h3>
          <h1>Des solutions de pointe pour les défis d'aujourd'hui</h1>
        </div>
        <div className="certificat-card-component">
            <div className="security certificat-card">
                <img src={SecurityPic} alt="network"/>
                <h2>sécurité & hacking</h2>
                <p>Programme spécial avec certifications de <span>HACKER</span> et d'<span>ENQUÊTEUR LEGISTE </span> reconnues par le <span>Ministère Américain de la Défense </span>(DoD)</p>
                <a href="/">Voir le cursus</a>
            </div>
            <div className="network certificat-card">
                <img src={NetworkPic} alt="network"/>
                <h2>Réseaux & communications</h2>
                <p>Certification <span>CISCO</span>, leader de l’interconnexion de  succursales, d’Entreprises-Grand Réseaux et Sécurité</p>
                <a href="/">Voir le cursus</a>
            </div>
            <div className="database certificat-card">
                <img src={DatabasePic} alt="network"/>
                <h2>Database programming & business intelligence</h2>
                <p><span>Business Intelligence</span>, ORACLE Database, Programming,  Management of Information System, Security/Hacking</p>
                <a href="/">Voir le cursus</a>
            </div>
            <div className="server certificat-card">
                <img src={ServerPic} alt="network"/>
                <h2>Server & cloud</h2>
                <p>Certification <span>MICROSOFT</span>, Leader mondial des technologies Serveur/Client/Cloud utilisées dans la quasi totalité des entreprises</p>
                <a href="/">Voir le cursus</a>
            </div>
        </div>
      </div>
    </div>
  );
}
