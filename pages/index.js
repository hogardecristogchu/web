import ControlledCarousel from "../components/ControlledCarousel";
import CardsCausas from "../components/CardsCausas";
import Voluntariado from "../components/Voluntariado";
import MenuNav from "../components/MenuNav";
import Dispositivos from "../components/Dispositivos";
import Maps from "../components/Maps";
import CasaMunilla from "../components/CasaMunilla";
import EspacioPrimeraInfancia from "../components/EspacioPrimeraInfancia";
import ElRefugio from "../components/ElRefugio";
import BrotaServicios from "../components/BrotaServicios";
import BrotaProductos from "../components/BrotaProductos";
import CasitaLibertad from "../components/CasitaLibertad";


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
        <CasaMunilla />
        <EspacioPrimeraInfancia />
        <ElRefugio />
        <BrotaServicios />
        <BrotaProductos />
        <CasitaLibertad />
      </div>
    </>
  );
}

export default HomePage;
