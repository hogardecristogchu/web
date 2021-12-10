import React from "react";
import CardDispositivosSinMapa from "./CardDispositivosSinMapa";

const Equipo = () => {
    return (
        <div id="equipo">
          <div className="container movil my-5">
            <div className="row mt-5">
              <div className="col-12 col-md-6">
                  {<img src="/dispositivos/EQUIPO.jpg" className="mt-2 img-fluid" alt="Nuestro Equipo" />}
              </div>
              <div className="col-12 col-md-6">
                <div className="row title mt-2">
                  <div className="line-dec-"></div>
                  <h2>EQUIPO</h2>
                </div>
                <div className="row mb-5 mt-4">
                  <p>Nuestro equipo está integrado por personas con vocación social. Personas diversas en términos de formación, especialización y trayectos de vida. Personas que suman sus conocimientos técnicos y, sobre todo, humanos para acompañar a otros.</p>
                  <p>Algunos de ellos, han sido acompañados por el Hogar de Cristo y luego de haber transitado un camino de autosuperación, permanecieron como “Acompañantes Pares”, guiando e inspirando a personas que quieren salir adelante. Lo central de nuestro equipo es el sentido de pertenencia a la comunidad-familia del Hogar de Cristo y el cuidado y acompañamiento hacia los otros que asume cada miembro que se suma.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    };
    
    export default Equipo;