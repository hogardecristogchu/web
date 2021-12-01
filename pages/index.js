import React from "react";
import ControlledCarousel from "../components/ControlledCarousel";
import CardsCausas from "../components/CardsCausas";
import Voluntariado from "../components/Voluntariado";
import MenuNav from "../components/MenuNav";
import Dispositivos from "../components/Dispositivos";
import Nazareth from "../components/Nazareth";
import CorazonDeMaria from "../components/CorazonDeMaria";
import AsuncionDeMaria from "../components/AsuncionDeMaria";
import CasaMunilla from "../components/CasaMunilla";
import EspacioPrimeraInfancia from "../components/EspacioPrimeraInfancia";
import ElRefugio from "../components/ElRefugio";
import BrotaServicios from "../components/BrotaServicios";
import BrotaProductos from "../components/BrotaProductos";
import CasitaLibertad from "../components/CasitaLibertad";
import ColaborarVoluntariado from "../components/ColaborarVoluntariado";
import DonacionMonetaria from "../components/DonacionMonetaria";
import "bootstrap/dist/css/bootstrap.min.css";
import ContactoBrota from "../components/ContactoBrota";
import Equipo from "../components/Equipo";
import FamiliaGrande from "../components/FamiliaGrande";
import Nosotros from '../components/Nosotros';

function HomePage() {
  return (
    <>
      <MenuNav />
      <div>
        <ControlledCarousel></ControlledCarousel>
        <CardsCausas />
        <Voluntariado />
        <Nosotros/>
        <Equipo />
        <FamiliaGrande />
        <Dispositivos />
        <Nazareth />
        <CorazonDeMaria />
        <AsuncionDeMaria />
        <CasaMunilla />
        <EspacioPrimeraInfancia />
        <ElRefugio />
        <BrotaServicios />
        <BrotaProductos />
        <CasitaLibertad />
        <ColaborarVoluntariado />
        <DonacionMonetaria />
        <ContactoBrota titulo="Contratar Servicios Brota" />
        <ContactoBrota titulo="Comprar productos Brota" />
        <ContactoBrota titulo="Contratar Servicios Brota" />
        <ContactoBrota titulo="Comprar productos Brota" />
      </div>
    </>
  );
}

export default HomePage;
