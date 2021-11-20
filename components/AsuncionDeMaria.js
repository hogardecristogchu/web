
import React from "react";
import CardDispositivos from "./CardDispositivos";
import Testimonios from "./Testimonios";

const AsuncionDeMaria = () => {
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
        imagen={"/dispositivos/Asuncion.jpg"}
        titulo={"ASUNCIÓN DE MARÍA"}
        subtitulo={"Loren ipsum"}
        texto={"Asunción de María se ubica en el Barrio 338 de nuestra ciudad. Abrió sus puertas como centro de día en agosto de 2018. Desde este dispositivo se acompañan a personas con consumo problemático y lo que se busca es primeriar en el amor, no esperar a que vengan al centro barrial sino salir al encuentro y una vez generado el vínculo, ofrecer caminos de recuperación y desarrollo que se adapten al contexto y posibilidades de la persona. "}
        textoDos={"Este espacio cuenta con talleres de musicoterapia, básquet, taller de manualidades, grupo de escucha, espiritualidad, entre otras.Entre los objetivos que persigue el centro barrial, como primera definición, es un espacio alojador, un dispositivo comunitario de acompañamiento para la vida, compuesto por un equipo de personas comprometidas. Se acompaña “la vida” y no sólo el problema de alguien con consumo problemático de sustancias. También se acercan las personas que están solas, huérfanas, desoladas, enfermas y, además, con la salud comprometida por el consumo."}
      />
      <Testimonios testimonios={testimonios}></Testimonios>
    </>
  );
};

export default AsuncionDeMaria;
