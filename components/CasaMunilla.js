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
        source={"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3345.6714722240044!2d-58.54901098525165!3d-33.01243588255075!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95b007f916e24057%3A0x867de8d53a6ff365!2sGervasio%20Mendez%20%26%20Calle%20Bomberos%20Voluntarios%2C%20Gualeguaych%C3%BA%2C%20Entre%20R%C3%ADos!5e0!3m2!1ses-419!2sar!4v1636745145279!5m2!1ses-419!2sar"}
      />
      <Testimonios testimonios={testimonios}></Testimonios>
    </>
  );
};

export default CasaMunilla;
