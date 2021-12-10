import React from 'react';
import Dispositivos from "../components/Dispositivos";
import Nazareth from "../components/Nazareth";
import CorazonDeMaria from "../components/CorazonDeMaria";
import AsuncionDeMaria from "../components/AsuncionDeMaria";
import CasaMunilla from "../components/CasaMunilla";

const CentrosBarriales = () => {
     return (
        <div className="container-paginas">
          <Dispositivos />
          <Nazareth />
          <CorazonDeMaria />
          <AsuncionDeMaria/>
          <CasaMunilla/>
        </div>
      );
    };
    
export default CentrosBarriales;