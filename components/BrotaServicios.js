import React from "react";
import CardDispositivosSinMapa from "./CardDispositivosSinMapa";
import Testimonios from "./Testimonios";

const BrotaProductos = () => {
  const testimonios = [
    {
      testimonio:
        "Para mí es una contención en mi vida por el tema de mi recuperación en un camino que me guía a la sociedad",
      testigo: "Nacho, 35 años.",
    },
    {
      testimonio:
        "Brota para mí es muy importante. Me ayuda a contenerme y me gusta cumplir con mi trabajo",
      testigo: "Maxi, 27 años",
    },
    {
      testimonio:
      "Brota para mí significa reinserción social y laboral para poder recuperar los objetivos de mi vida. Ser responsables del laburo que meto y mucha paciencia",
      testigo: "Carlos, 38 años",
    },
  ];
  return (
    <>
      <CardDispositivosSinMapa
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
