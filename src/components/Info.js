import Arrow from '../assets/button-arrow.png'

export default function Info() {
    return (
        <div className="info">
            <h3>Vous voulez plus d'infos ?</h3>
            <h1>Découvrez les 80 métiers du hacking <br /> et de la sécurité Informatique</h1>
            <button className="info-button">
                Découvrir <img src={Arrow} alt='arrow'/>
            </button>
        </div>
    )
}