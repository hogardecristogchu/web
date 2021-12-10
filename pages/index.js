import React from 'react';
import ControlledCarousel from "../components/ControlledCarousel";
import CardsCausas from "../components/CardsCausas";
import Voluntariado from "../components/Voluntariado";
import MenuNav from "../components/MenuNav";
import 'bootstrap/dist/css/bootstrap.min.css';

function HomePage() {
  return (
    <>

      <MenuNav />
      <div>
        <ControlledCarousel></ControlledCarousel>
        <CardsCausas />
        <Voluntariado />
      </div>
    </>
  );
}

export default HomePage;
