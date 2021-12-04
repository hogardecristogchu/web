import React from 'react';
import Dispositivos from "../components/Dispositivos";
import Nazareth from "../components/Nazareth";
import CorazonDeMaria from "../components/CorazonDeMaria";
import AsuncionDeMaria from "../components/AsuncionDeMaria";
import CasaMunilla from "../components/CasaMunilla";
import EspacioPrimeraInfancia from "../components/EspacioPrimeraInfancia";
import CasitaLibertad from "../components/CasitaLibertad";
import BrotaServicios from "../components/BrotaServicios";
import BrotaProductos from "../components/BrotaProductos";
import ElRefugio from "../components/ElRefugio";

const TodosDispositivos = () => {
     return (
        <div className="container-paginas">
            <Dispositivos />
            <Nazareth/>
            <CorazonDeMaria/>
            <AsuncionDeMaria/>
            <CasaMunilla />
            <EspacioPrimeraInfancia />
            <ElRefugio />
            <BrotaServicios />
            <BrotaProductos />
            <CasitaLibertad />
        </div>
      );
    };
    
export default TodosDispositivos;