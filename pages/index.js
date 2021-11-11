import ControlledCarousel from "../components/ControlledCarousel";
import CardsCausas from "../components/CardsCausas";
import Voluntariado from "../components/Voluntariado";
import MenuNav from "../components/MenuNav";
import Dispositivos from "../components/Dispositivos";
import Maps from "../components/Maps";


function HomePage() {
  return (
    <>
      <MenuNav />
      <div>
        <ControlledCarousel></ControlledCarousel>
        <CardsCausas/>
        <Voluntariado/>
        <Dispositivos/>
        <Maps/>
      </div>
    </>
  );
}

export default HomePage;
