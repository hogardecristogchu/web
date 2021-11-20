
import React from "react";
import CardDispositivos from "./CardDispositivos";
import Testimonios from "./Testimonios";

const Nazareth = () => {
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
        imagen={"/dispositivos/Nazareth.jpg"}
        titulo={"NAZARETH"}
        subtitulo={"Loren ipsum"}
        texto={"Nazareth se ubica en el barrio “La Cuchilla” de nuestra ciudad. Abrió sus puertas en 2015"}
      />
      <Testimonios testimonios={testimonios}></Testimonios>
 
    </>
  );
};

export default Nazareth;
