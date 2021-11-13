import React from "react";
import CardDispositivos from "./CardDispositivos";
import Testimonios from "./Testimonios";

const CorazonDeMaria = () => {
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
        imagen={"/dispositivos/CorazonDeMaria.jpg"}
        titulo={"CORAZÓN DE MARÍA"}
        subtitulo={"Loren ipsum"}
        texto={"Corazón de María se ubica en el barrio “La Cuchilla” de nuestra ciudad. Abrió sus puertas en agosto de 2017. Este dispositivo surge debido a la necesidad de poder acompañar a chicas y madres con consumo problemático. La casa es un lugar de contención y de reaprendizaje en su rol materno, de recuperación, y de generación de vínculos saludables que permite transitar hacia una vida sin consumo. En este lugar se llevan a cabo diversas actividades tales como talleres de costura, espacios de espiritualidad, terapéuticos, hockey, actividades prácticas, grupo de familia, entre otras. Entre los objetivos que persigue el centro barrial, como primera definición, es un espacio alojador, un dispositivo comunitario de acompañamiento para la vida, compuesto por un equipo de personas comprometidas. Se acompaña “la vida” y no sólo el problema de alguien con consumo problemático de sustancias. También se acercan las mujeres que están solas, huérfanas, desoladas, enfermas y, además, con la salud comprometida por el consumo. Acompañamos la totalidad de cada vida. Esto significa abrazar la complejidad estableciendo necesariamente relaciones con otras instituciones de la ciudad o bien del país. Son diversas las necesidades de las personas que asisten a “Corazón de María”. Para responder a ellas, se establecen vínculos con distintas organizaciones estatales o de la sociedad civil que ayudan a cubrir en mayor o menor medida las carencias de quienes se acompaña. Lo central en la propuesta es el sentido de pertenencia a la comunidad-familia del Centro Barrial y el cuidado y acompañamiento hacia los otros que asume cada miembro que llega a nuestro dispositivo."}
        source={"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3346.232294638036!2d-58.51366338481242!3d-32.99765068090592!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95b0078302dc7bc1%3A0x1aa0820f51759d2!2sBelgrano%20736%2C%20Gualeguaych%C3%BA%2C%20Entre%20R%C3%ADos!5e0!3m2!1ses-419!2sar!4v1636744961830!5m2!1ses-419!2sar"}
      />
      <Testimonios  testimonios={testimonios}></Testimonios>
    </>
  );
};

export default CorazonDeMaria;
