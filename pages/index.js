import ControlledCarousel from "../components/ControlledCarousel";
import CardsCausas from "../components/CardsCausas";
import Voluntariado from "../components/Voluntariado";

function HomePage() {
  return (
    <div>
      <div>
        <ControlledCarousel></ControlledCarousel>
        <CardsCausas/>
        <Voluntariado/>
      </div>
    </div>
  );
}

export default HomePage;
