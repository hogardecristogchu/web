import React from "react";
import CardDispositivosSinMapa from "./CardDispositivosSinMapa";

const Equipo = () => {
    return (
        <>
          <CardDispositivosSinMapa
            imagen={"/dispositivos/QS-Equipo.jpg"}
            titulo={"EQUIPO "}
            texto={"Nuestro equipo está integrado por personas con vocación social. Personas diversas en términos de formación, especialización y trayectos de vida. Personas que suman sus conocimientos técnicos y, sobre todo, humanos para acompañar a otros."}
            textoDos={"Algunos de ellos, han sido acompañados por el Hogar de Cristo y luego de haber transitado un camino de autosuperación, permanecieron como “Acompañantes Pares”, guiando e inspirando a personas que quieren salir adelante. Lo central de nuestro equipo es el sentido de pertenencia a la comunidad-familia del Hogar de Cristo y el cuidado y acompañamiento hacia los otros que asume cada miembro que se suma."}
          />
        </>
      );
    };
    
    export default Equipo;