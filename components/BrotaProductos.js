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
        imagen={"/dispositivos/Brota-Productos.jpg"}
        titulo={"BROTA PRODUCTOS"}
        subtitulo={"Loren ipsum"}
        texto={
          "Brota es la marca comercial de los productos y servicios que se ofrecen desde el Hogar hacia la comunidad. Brota nació en marzo del año 2019. El nombre hace referencia a la posibilidad que tiene cada persona, de volver a nacer y transformarse en nueva vida para otros.Brota “servicios” ofrece principalmente servicios de jardinería y mantenimiento de parques, construcción y albañilería, e impermeabilización y pintura.Las personas que conforman la cooperativa trabajan con seguro propio y coordinados por un maestro mayo de obra."
        }
        textButton={"COMPRAR NUESTROS PRODUCTOS"}
        source={"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3346.230557727!2d-58.51371628481238!3d-32.99769648090585!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95b00782fd62fca5%3A0x4f9a4b32b5c3dd71!2sBelgrano%20747%2C%20Gualeguaych%C3%BA%2C%20Entre%20R%C3%ADos!5e0!3m2!1ses-419!2sar!4v1636693139455!5m2!1ses-419!2sar"}
      />
      <Testimonios testimonios={testimonios}></Testimonios>
    </>
  );
};

export default BrotaProductos;
