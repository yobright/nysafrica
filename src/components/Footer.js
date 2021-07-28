import SocialLinks from "../assets/social.svg";
import Logo from "../assets/logo.svg";

export default function Footer() {
  return (
    <div className="footer">
      <div className="up">
        <div className="social">
          <img src={Logo} alt="logo" className="footer-logo"/>
          <img src={SocialLinks} alt="social" />
        </div>
        <div className="contact-info">
          <h2>Contacts</h2>
          <h3>Abidjan</h3>
          <ul>
            <li>COCODY, ANGRE 8ème Tranche</li>
            <li>derrière SICOMEX</li>
            <li>(+225) 07 69 69 29 29</li>
          </ul>
        </div>
        <div className="liens-utiles">
          <h2>liens utiles</h2>
          <div>
            <ul>
              <li> <a href="/">Accueil</a> </li>
              <li><a href="/">Compétences</a></li>
              <li><a href="/">Certifications</a></li>
              <li><a href="/">Diplôme</a></li>
            </ul>
            <ul>
              <li><a href="/">A propos de nous</a></li>
              <li><a href="/">University</a></li>
              <li><a href="/">Hacker Pro</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="down">
        <p>© 2021 All right reserved Nys Africa</p>
        <a href="/">Politique de confidentialité</a>
        <a href="/">Termes et conditions</a>
      </div>
    </div>
  );
}
