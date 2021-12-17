import React from 'react';
import Equipo from '../components/Equipo';
import FamiliaGrande from "../components/FamiliaGrande";
import Nosotros from '../components/Nosotros';

const QuienesSomos = () => {
     return (
        <div className="container-paginas">
            <Nosotros />
            <Equipo />
            <FamiliaGrande/>
        </div>
      );
    };
    
export default QuienesSomos;