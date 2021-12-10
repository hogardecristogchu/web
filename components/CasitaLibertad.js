import React from "react";
import CardDispositivosSinMapa from "./CardDispositivosSinMapa";
import Testimonios from "./Testimonios";

const CasitaLibertad = () => {
  const testimonios = [
    {
      testimonio:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
      testigo: "Marcelo, 28 años",
    },
    {
      testimonio:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
      testigo: "Juana, 53 años",
    },
    {
      testimonio:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
      testigo: "Mariana, 23 años",
    },
  ];
  return (
    <>
      <CardDispositivosSinMapa
        imagen={"/dispositivos/Casa-Libertad.jpg"}
        titulo={"CASITA LIBERTAD"}
        subtitulo={""}
        texto={
          "Casa Libertad, es un dispositivo que comenzó a funcionar con recursos propios en diciembre del 2019. El mismo tiene por fin acompañar a personas privadas de la libertad, durante el contexto de encierro y cuando recuperan la libertad. Por medio de diferentes estrategias, herramientas y decisiones se busca impulsar el camino de autonomía de cada persona y su proceso de inclusión social."
        }
        textoDos={
          "Los referentes de Casa Libertad realizan visitas semanales a la Granja Penal, acercan mercadería, establecen comunicación y contención telefónica diaria, realizan asistencia legal, acompañan el primer día de libertad facilitando el traslado a sus hogares, acompañan las búsquedas de trabajo y en caso de ser necesario facilitan el alojamiento de forma temporal, hasta que se logra la revinculación con la familia y/o comunidad."
        }
      />
      <Testimonios  testimonios={testimonios}></Testimonios>
    </>
  );
};

export default CasitaLibertad;
