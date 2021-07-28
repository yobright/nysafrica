import CheckboxIcon from '../assets/chekbox.svg'
import Arrow from "../assets/button-arrow.png";


export default function Diplome() {
    return (
      <div className="diplome">
        <h1 className="diplome-title">Nos Diplômes Universitaires</h1>
        <div className="diplome-components">
          <div className="bachelor-card diplome-card">
            <h3>bachelor / licence</h3>
            <h1>IMS</h1>
            <ul>
              <li>
                <img src={CheckboxIcon} alt="pins" />
                Maintenance & Dépannage
              </li>
              <li>
                <img src={CheckboxIcon} alt="pins" />
                Administration des Serveurs & Cloud
              </li>
              <li>
                <img src={CheckboxIcon} alt="pins" />
                Administration des Réseaux & Interc...
              </li>
              <li>
                <img src={CheckboxIcon} alt="pins" /> Management des systèmes
                Informat...
              </li>
              <li>
                <img src={CheckboxIcon} alt="pins" />
                Base de données & programmation
              </li>
            </ul>
            <button className="diplome-button">
              Plus d'informations <img src={Arrow} alt="arrow" />
            </button>
          </div>
          <div className="cloud-card diplome-card">
            <h3>Master</h3>
            <h1>CLOUD</h1>
            <ul>
              <li>
                <img src={CheckboxIcon} alt="pins" />
                Dépannage & Maintenance avancé
              </li>
              <li>
                <img src={CheckboxIcon} alt="pins" />
                Administration avancée des Serveurs
              </li>
              <li>
                <img src={CheckboxIcon} alt="pins" />
                Administration avancée des Réseaux
              </li>
              <li>
                <img src={CheckboxIcon} alt="pins" />
                Sécurité & hacking
              </li>
              <li>
                <img src={CheckboxIcon} alt="pins" />
                Gestion de projet & management SI
              </li>
            </ul>
            <button className="diplome-button">
              Plus d'informations <img src={Arrow} alt="arrow" />
            </button>
          </div>
          <div className="data-science-card diplome-card">
            <h3>Master</h3>
            <h1>
              DATA <br /> SCIENCE
            </h1>
            <ul>
              <li>
                <img src={CheckboxIcon} alt="pins" />
                Base de données
              </li>
              <li>
                <img src={CheckboxIcon} alt="pins" />
                Programmation avancée
              </li>
              <li>
                <img src={CheckboxIcon} alt="pins" />
                Business Intelligence
              </li>
              <li>
                <img src={CheckboxIcon} alt="pins" />
                Gestion de projets
              </li>
              <li>
                <img src={CheckboxIcon} alt="pins" />
                Sécurité & Hacking
              </li>
            </ul>
            <button className="diplome-button">
              Plus d'informations <img src={Arrow} alt="arrow" />
            </button>
          </div>
        </div>
      </div>
    );
} 