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
import Novedades from "../components/Novedades";
import DonacionMonetaria from "../components/DonacionMonetaria";
import "bootstrap/dist/css/bootstrap.min.css";
import Contacto from "../components/Contacto";
import ContactoBrota from "../components/ContactoBrota";
import Equipo from "../components/Equipo";
import FamiliaGrande from "../components/FamiliaGrande";

function HomePage() {
  return (
    <>
      <MenuNav />
      <div>
        <ControlledCarousel></ControlledCarousel>
        <CardsCausas />
        <Voluntariado />
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
        <Novedades />
        <ContactoBrota titulo="Contratar Servicios Brota" />
        <ContactoBrota titulo="Comprar productos Brota" />
        <ContactoBrota titulo="Contratar Servicios Brota" />
        <ContactoBrota titulo="Comprar productos Brota" />
        <Contacto />
      </div>
    </>
  );
}

export default HomePage;
