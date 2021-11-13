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
        source={"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3346.232294638036!2d-58.51366338481242!3d-32.99765068090592!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95b0078302dc7bc1%3A0x1aa0820f51759d2!2sBelgrano%20736%2C%20Gualeguaych%C3%BA%2C%20Entre%20R%C3%ADos!5e0!3m2!1ses-419!2sar!4v1636745305293!5m2!1ses-419!2sar"}
      />
      <Testimonios testimonios={testimonios}></Testimonios>
    </>
  );
};

export default BrotaProductos;
