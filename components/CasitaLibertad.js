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
        subtitulo={"Loren ipsum"}
        texto={
          "Casa Libertad, es un dispositivo que comenzó a funcionar con recursos propios en diciembre del 2019. El mismo tiene por fin acompañar a personas privadas de la libertad, y estar particularmente presentes en el momento en que recuperan su libertad.Por medio de diferentes estrategias, herramientas y decisiones se busca impulsar el camino de autonomía de cada persona y su proceso de inclusión social."
        }
        textoDos={
          "Entre las acciones puntuales que se realizan se pueden mencionar, las visitas a la Granja Penal, el acompañamiento y traslado a sus viviendas cuando recuperan la libertad, el envío de mercadería, la comunicación y contención telefónica diaria, la asistencia legal, el ofrecimiento de un espacio donde alojarse de forma temporal (hasta que se logra la revinculación con la familia y/o comunidad) y la búsqueda de oportunidades de trabajo."
        }
      />
      <Testimonios  testimonios={testimonios}></Testimonios>
    </>
  );
};

export default CasitaLibertad;
