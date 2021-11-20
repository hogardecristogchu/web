import React from "react";
import CardDispositivos from "./CardDispositivos";
import Testimonios from "./Testimonios";

const CasaMunilla = () => {
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
        imagen={"/dispositivos/CB-Casa-Munilla.jpg"}
        titulo={"Casa Munilla"}
        subtitulo={"Acompañamos la totalidad de cada vida"}
        texto={
          "Casa Munilla se ubica en el Barrio Munilla de nuestra ciudad. Entre los objetivos que persigue el centro barrial, como primera definición, es un espacio alojador, un dispositivo comunitario de acompañamiento para la vida, compuesto por un equipo de personas comprometidas."
        }
        textoDos={
          "Se acompaña “la vida” y no sólo el problema de alguien con consumo problemático de sustancias. También se acercan las personas que están solas, huérfanas, desoladas, enfermas y, además, con la salud comprometida por el consumo. Esto significa abrazar la complejidad estableciendo necesariamente relaciones con otras instituciones de la ciudad o bien del país. Son diversas las necesidades de las personas que asisten a Casa Munilla. Para responder a ellas, se establecen vínculos con distintas organizaciones estatales o de la sociedad civil que ayudan a cubrir en mayor o menor medida las carencias de quienes se acompaña."
        }
      />
      <Testimonios testimonios={testimonios}></Testimonios>
    </>
  );
};

export default CasaMunilla;
