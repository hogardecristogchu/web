import React from "react";
import CardDispositivosSinMapa from "./CardDispositivosSinMapa";
import Testimonios from "./Testimonios";
import { BsTelephoneFill } from "react-icons/bs";

const CasitaLibertad = () => {
  const testimonios = [
    {
      testimonio:
        "Para mí Casita Libertad fue y es todo, porque cuando yo salí en libertad me encontraba en situación de calle. Me recogieron, me trajeron al Hogar de Cristo y me dieron todo. Me dieron ganas de seguir luchando, porque yo salí con una mano atrás y otra adelante, donde no podía seguir mi vida porque no sabía qué hacer. Entonces, Casita Libertad es, en una palabra, amor, amor por el prójimo",
      testigo: "Marcos, 45 años",
    }
  ];
  return (
    <>
      <CardDispositivosSinMapa
        imagen={"/dispositivos/Casa-Libertad.jpg"}
        titulo={"CASITA LIBERTAD"}
        subtitulo={"”Acompañar a las personas en su proceso de libertad”"}
        texto={
          "Casa Libertad, es un dispositivo que comenzó a funcionar con recursos propios en diciembre del 2019. El mismo tiene por fin acompañar a personas privadas de la libertad, durante el contexto de encierro y cuando recuperan la libertad. Por medio de diferentes estrategias, herramientas y decisiones se busca impulsar el camino de autonomía de cada persona y su proceso de inclusión social."
        }
        textoDos={
          "Los referentes de Casa Libertad realizan visitas semanales a la Granja Penal, acercan mercadería, establecen comunicación y contención telefónica diaria, realizan asistencia legal, acompañan el primer día de libertad facilitando el traslado a sus hogares, acompañan las búsquedas de trabajo y en caso de ser necesario facilitan el alojamiento de forma temporal, hasta que se logra la revinculación con la familia y/o comunidad."
        }
      />
      <Testimonios  testimonios={testimonios}></Testimonios>
      <div className="container mt-2 mb-5">
            <div className="row title">
                <h2 className="text-center pb-3">Contacto</h2>
            </div>
            <div className="card-contactos text-center mt-2">
                    <h5 className="title-contactos">Casita Libertad</h5>
                    <p className="text-contacto"><BsTelephoneFill  className="contacto-icon" />Celular: (03446) 15 412 000</p>
            </div>
      </div>
    </>
  );
};

export default CasitaLibertad;
