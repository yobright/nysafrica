import Logo from '../assets/logo.svg'


export default function Header() {
    return (
      <div className="header">
          <img src={Logo} alt="logo"/>
          <div className="navbar">
            <a href='/' >Formations</a>
            <a href='/' >Academics</a>
            <a href='/' >Compétences</a>
            <a href='/' >Certifications</a>
            <a href='/' >Bourse</a>
          </div>
          <button >
            Contactez-nous
          </button>
      
      </div>
    );   
}