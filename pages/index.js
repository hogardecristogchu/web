import ControlledCarousel from "../components/ControlledCarousel";
import CardsCausas from "../components/CardsCausas";
import Voluntariado from "../components/Voluntariado";
import MenuNav from "../components/MenuNav";
import Dispositivos from "../components/Dispositivos";
import Maps from "../components/Maps";
import Nazareth from "../components/Nazareth";
import CorazonDeMaria from "../components/CorazonDeMaria";
import AsuncionDeMaria from "../components/AsuncionDeMaria";
import CasaMunilla from "../components/CasaMunilla";
import EspacioPrimeraInfancia from "../components/EspacioPrimeraInfancia";
import ElRefugio from "../components/ElRefugio";
import BrotaServicios from "../components/BrotaServicios";
import BrotaProductos from "../components/BrotaProductos";
import CasitaLibertad from "../components/CasitaLibertad";
import Blog from "../components/Blog";
import DonacionMonetaria from "../components/DonacionMonetaria";
import ContactoBrota from "../components/ContactoBrota";
import FooterCompleto from "../components/FooterCompleto";


function HomePage() {
  return (
    <>
      <MenuNav />
      <div>
        <ControlledCarousel></ControlledCarousel>
        <CardsCausas />
        <Voluntariado />
        <Dispositivos />
        <Maps />
        <Nazareth/>
        <CorazonDeMaria/>
        <AsuncionDeMaria/>
        <CasaMunilla />
        <EspacioPrimeraInfancia />
        <ElRefugio />
        <BrotaServicios />
        <BrotaProductos />
        <CasitaLibertad />
        <DonacionMonetaria />
        <Blog />
        <ContactoBrota titulo="Contratar Servicios Brota" />
        <ContactoBrota titulo="Comprar productos Brota" />
        <FooterCompleto />
      </div>
    </>
  );
}

export default HomePage;
