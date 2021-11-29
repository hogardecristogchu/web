
import React from "react";
import CardDispositivosSinMapa from "./CardDispositivosSinMapa";
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
      <CardDispositivosSinMapa
        imagen={"/dispositivos/Asuncion.jpg"}
        titulo={"ASUNCIÓN DE MARÍA"}
        subtitulo={"Loren ipsum"}
        texto={"Asunción de María se ubica en el Barrio 338 de la ciudad de Gualeguaychú y nació desde la necesidad de dar una respuesta al problema del consumo de sustancias en la zona oeste de la ciudad. Abrió sus puertas como Centro de Día en agosto de 2018."}
        textoDos={"En Asunción de María se acompañan a personas, tanto a hombres y mujeres, como a niños, en contextos de consumo problemático. Este espacio cuenta con talleres de musicoterapia, básquet, taller de manualidades, grupo de escucha, espiritualidad, asesoramiento legal, entre otros. Y para los niños espacios de juegos y estimulación temprana. Además, este dispositivo cuenta con espacios deportivos y un amplio parque para poder realizar actividades sociales durante todo el año."}
      />
      <Testimonios testimonios={testimonios}></Testimonios>
    </>
  );
};

export default AsuncionDeMaria;
