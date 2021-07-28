import Certificat from "../components/Certificat";
import Diplome from "../components/Diplome";
import FAQ from "../components/FAQ";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from '../components/Hero';
import Info from "../components/Info";
import Inscription from "../components/Inscription";

export default function Home() {
    return (
        <div>
            <Header />
            <Hero />
            <Certificat />
            <Diplome />
            <Info />
            <FAQ />
            <Inscription />
            <Footer />
        </div>
    )
}