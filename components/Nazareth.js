
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
        textoDos={"En este lugar se llevan a cabo diversas actividades tales como talleres de marroquinería, carpintería, espacios de espiritualidad, espacios de escucha, grupos de familia, asesoramiento legal, entre otras.El Centro Barrial Nazareth también aloja a personas durante la noche, lo cual implica el gran desafío de ofrecer contención las 24hrs del día, los siete días de la semana."}
      />
      <Testimonios testimonios={testimonios}></Testimonios>
    </>
  );
};

export default Nazareth;
