import React from 'react';
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
import ColaborarVoluntariado from "../components/ColaborarVoluntariado";
import DonacionMonetaria from "../components/DonacionMonetaria";
import 'bootstrap/dist/css/bootstrap.min.css';
import ContactoBrota from "../components/ContactoBrota";
import FooterCompleto from "../components/FooterCompleto";
import Equipo from '../components/Equipo';
import Contacto from '../components/Contacto';
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
        <FamiliaGrande/>
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
        <ColaborarVoluntariado/>
        <DonacionMonetaria />
        <ContactoBrota titulo="Contratar Servicios Brota" />
        <ContactoBrota titulo="Comprar productos Brota" />
        <Contacto />
      </div>
    </>
  );
}

export default HomePage;
