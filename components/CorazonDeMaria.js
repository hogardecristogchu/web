import React from 'react';
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
        texto={"Corazón de María se ubica en el barrio “La Cuchilla” de nuestra ciudad. Abrió sus puertas en agosto de 2017. Este dispositivo surge debido a la necesidad de poder acompañar a mujeres, muchas madres, en situación de consumo problemático."}
        textoDos={"Corazón de María es un lugar de contención y de reaprendizaje en su rol materno, de recuperación, de empoderamiento social y económico, y de generación de vínculos saludables y redes que favorecen el tránsito hacia una vida sin consumo. En este lugar se llevan a cabo diversas actividades tales como talleres de costura, espacios de espiritualidad, terapéuticos, hockey, actividades prácticas, grupo de familia, entre otras."}
      />
      <Testimonios  testimonios={testimonios}></Testimonios>
    </>
  );
};

export default CorazonDeMaria;
