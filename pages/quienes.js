import React from 'react';
import Equipo from '../components/Equipo';
import FamiliaGrande from "../components/FamiliaGrande";
import Nosotros from '../components/Nosotros';

const QuienesSomos = () => {
     return (
        <div className="container-paginas">
            <Nosotros id="nosotros" />
            <Equipo id="equipo"/>
            <FamiliaGrande id="familiagrande"/>
        </div>
      );
    };
    
export default QuienesSomos;