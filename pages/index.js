import React from 'react';
import ControlledCarousel from "../components/ControlledCarousel";
import CardsCausas from "../components/CardsCausas";
import Voluntariado from "../components/Voluntariado";
import MenuNav from "../components/MenuNav";
import ColaborarVoluntariado from "../components/ColaborarVoluntariado";
import ContactoBrota from "../components/ContactoBrota";
import FooterCompleto from "../components/FooterCompleto";
import 'bootstrap/dist/css/bootstrap.min.css';

function HomePage() {
  return (
    <>

      <MenuNav />
      <div>
        <ControlledCarousel></ControlledCarousel>
        <CardsCausas />
        <Voluntariado />
        <ColaborarVoluntariado/>
        <ContactoBrota titulo="Contratar Servicios Brota" />
        <ContactoBrota titulo="Comprar productos Brota" />
      </div>
    </>
  );
}

export default HomePage;
