import React from "react";
import CardDispositivosSinMapa from "./CardDispositivosSinMapa";
import ContactosIndividuales from "./ContactosIndividuales";
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
        "Brota para mí significa reinserción social y laboral para poder recuperar los objetivos de mi vida. Ser responsables del laburo que meto y mucha paciencia",
      testigo: "Carlos, 38 años",
    },
    {
      testimonio:
      "Para mí Brota es una salida laboral en conjunto con una contención moral, social y psicológica",
      testigo: "Lucas, 27 años",
    },
    {
      testimonio:
      "Brota para mí es muy importante. Me ayuda a contenerme y me gusta cumplir con mi trabajo",
      testigo: "Maxi, 27 años",
    }
  ];
  return (
    <>
      <CardDispositivosSinMapa
        imagen={"/dispositivos/Brota-Servicios.jpg"}
        titulo={"BROTA SERVICIOS"}
        subtitulo={"Brota es el primer paso para un trabajo digno y así recuperar la confianza en un futuro mejor"}
        texto={
          "Brota es la marca comercial de los productos y servicios que se ofrecen desde el Hogar de Cristo hacia la comunidad. Brota “servicios” ofrece principalmente servicios de jardinería y mantenimiento de parques, construcción y albañilería, e impermeabilización y pintura. Las personas que conforman la cooperativa trabajan con seguro propio y coordinados por un técnico."
        }
        textoDos={
          "Brota nació en marzo del año 2019. El nombre hace referencia a la posibilidad que tiene cada persona, de volver a nacer y transformarse en nueva vida para otros. A principios del año 2021, Brota sacó un libro contando su experiencia. El mismo puede ser adquirido en las librerías de la ciudad o por medio de los referentes del Hogar de Cristo."
        }
        textButton={"PARA CONTRATARNOS"}
      />
      <Testimonios testimonios={testimonios}></Testimonios>
      <ContactosIndividuales titulo="Cooperativa Brota" mail="brota.gchu@hogardecristo.org.ar" linkRedes="https://www.facebook.com/Brota-la-marca-del-Hogar-110062414093260" facebook="facebook.com//Brota-la-marca-del-Hogar"></ContactosIndividuales>
    </>
  );
};

export default BrotaProductos;
