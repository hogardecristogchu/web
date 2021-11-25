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
        texto={"Casa Munilla se ubica en el Barrio Munilla de nuestra ciudad. Abrió sus puertas como centro de día a finales del 2020. Este dispositivo nace a partir de un conflicto vecinal, y crece ante la necesidad de ofrecer un espacio de convivencia y contención dentro del barrio."}
        textoDos={
          "En el mismo se acompañan a hombres, mujeres y niños y se ofrecen diversas actividades como ser: actividades deportivas, talleres de oficio, espacios individuales de escucha, asesoramiento legal, espacios terapéuticos y espacios de juegos y estimulación temprana."
        }
      />
      <Testimonios testimonios={testimonios}></Testimonios>
    </>
  );
};

export default CasaMunilla;
