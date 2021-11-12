import React from "react";
import CardDispositivos from "./CardDispositivos";
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
      <CardDispositivos
        imagen={"/dispositivos/Casa-Libertad.jpg"}
        titulo={"CASITA LIBERTAD"}
        subtitulo={"Loren ipsum"}
        texto={
          "Casa Libertad, es un dispositivo que comenzó a funcionar con recursos propios en diciembre del 2019. El mismo tiene por fin acompañar a personas privadas de la libertad, y estar particularmente presentes en el momento en que recuperan su libertad.Por medio de diferentes estrategias, herramientas y decisiones se busca impulsar el camino de autonomía de cada persona y su proceso de inclusión social.Entre las acciones puntuales que se realizan se pueden mencionar, las visitas a la Granja Penal, el acompañamiento y traslado a sus viviendas cuando recuperan la libertad, el envío de mercadería, la comunicación y contención telefónica diaria, la asistencia legal, el ofrecimiento de un espacio donde alojarse de forma temporal (hasta que se logra la revinculación con la familia y/o comunidad) y la búsqueda de oportunidades de trabajo"
        }
        source={"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3346.232294638036!2d-58.51366338481242!3d-32.99765068090592!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95b0078302dc7bc1%3A0x1aa0820f51759d2!2sBelgrano%20736%2C%20Gualeguaych%C3%BA%2C%20Entre%20R%C3%ADos!5e0!3m2!1ses-419!2sar!4v1636745305293!5m2!1ses-419!2sar"}
      />
      <Testimonios testimonios={testimonios}></Testimonios>
    </>
  );
};

export default CasitaLibertad;
