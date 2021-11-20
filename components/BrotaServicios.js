import React from "react";
import CardDispositivos from "./CardDispositivos";
import Testimonios from "./Testimonios";

const BrotaProductos = () => {
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
        imagen={"/dispositivos/Brota-Servicios.jpg"}
        titulo={"BROTA SERVICIOS"}
        subtitulo={"Loren ipsum"}
        texto={
          "Brota es la marca comercial de los productos y servicios que se ofrecen desde el Hogar hacia la comunidad. Brota nació en marzo del año 2019.El nombre hace referencia a la posibilidad que tiene cada persona, de volver a nacer y transformarse en nueva vida para otros."
        }
        textoDos={
          "Brota “servicios” ofrece principalmente servicios de jardinería y mantenimiento de parques, construcción y albañilería, e impermeabilización y pintura.Las personas que conforman la cooperativa trabajan con seguro propio y coordinados por un maestro mayo de obra."
        }
        textButton={"PARA CONTRATARNOS"}
      />
      <Testimonios testimonios={testimonios}></Testimonios>
    </>
  );
};

export default BrotaProductos;
