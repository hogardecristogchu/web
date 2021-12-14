import React from "react";
import CardDispositivosSinMapa from "./CardDispositivosSinMapa";
import Link from 'next/link';
const FamiliaGrande = () => {
    return (
      <div id="familiagrande">
        <div className="container movil mt-5">
          <div className="row mt-5">
            <div className="col-12 col-md-6">
                {<img src="/dispositivos/Familia-Grande.jpg" className="mt-2 img-fluid" alt="Familia Grande" />}
            </div>
            <div className="p-movil col-12 col-md-6">
              <div className="row title mt-2">
                <div className="line-dec-"></div>
                <h2>FAMILIA GRANDE</h2>
              </div>
              <div className="row mt-3 mb-5 p-familia">
                <p>Somos parte de una Federación que agrupa a los Hogares de Cristo de Argentina, que tienen como finalidad dar respuesta integral a situaciones de vulnerabilidad social y/o consumos problemáticos de sustancias psicoactivas, poniendo siempre en primer lugar a la persona y sus cualidades.</p>
                <p>Para conocer más a la Federación Familia Grande Hogar de Cristo:</p>
                <button className="btn btn-m btn-dispositivos"><Link  target="_blank" href="https://hogardecristo.org.ar/"><a className="a-blancos">SITIO WEB</a></Link></button>
              </div>
            </div>
          </div>
        </div>
      </div>
      );
    };
    
    export default FamiliaGrande;