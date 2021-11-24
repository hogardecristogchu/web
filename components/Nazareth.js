
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
        texto={"Nazareth se ubica en el barrio “La Cuchilla” de nuestra ciudad. Abrió sus puertas en enero de 2015 y fue el primer dispositivo del Hogar de Cristo en Gualeguaychú.  Nació por la necesidad de dar respuesta a la problemática del consumo de sustancias en el barrio y en la ciudad."}
        source={"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3346.232294638036!2d-58.51366338481242!3d-32.99765068090592!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95b0078302dc7bc1%3A0x1aa0820f51759d2!2sBelgrano%20736%2C%20Gualeguaych%C3%BA%2C%20Entre%20R%C3%ADos!5e0!3m2!1ses-419!2sar!4v1636744961830!5m2!1ses-419!2sar"}
      />
      <Testimonios testimonios={testimonios}></Testimonios>
 
    </>
  );
};

export default Nazareth;
