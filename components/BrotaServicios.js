import React from "react";
import CardDispositivos from "./CardDispositivos";
import ContactosIndividuales from "./ContactosIndividuales";
import InstitucionesBrota from "./InstitucionesBrota";
import Testimonios from "./Testimonios";
import ContactoBrota from "./ContactoBrota";

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
      <CardDispositivos
        imagen={"/dispositivos/Brota-Servicios.jpg"}
        titulo={"BROTA SERVICIOS"}
        subtitulo={"”Brota es el primer paso para un trabajo digno y así recuperar la confianza en un futuro mejor.”"}
        texto={"Brota es la marca comercial de los productos y servicios que se ofrecen desde el Hogar de Cristo hacia la comunidad. Brota “servicios” ofrece principalmente servicios de jardinería y mantenimiento de parques, construcción y albañilería, e impermeabilización y pintura. Las personas que conforman la cooperativa trabajan con seguro propio y coordinados por un técnico."}
        textoDos={"Brota nació en marzo del año 2019. El nombre hace referencia a la posibilidad que tiene cada persona, de volver a nacer y transformarse en nueva vida para otros. A principios del año 2021, Brota sacó un libro contando su experiencia. El mismo puede ser adquirido en las librerías de la ciudad o por medio de los referentes del Hogar de Cristo."}
        textButton
        botonTexto={"PARA CONTRATARNOS"}
        linkBrota={"/contratar_brota"}
        tituloMapa={"UBICACIÓN"} 
        subtituloMapa={"BROTA"}
        textoMapa={"Belgrano 736 "}
        textoDosMapa={"Gualeguaychú, Entre Ríos"}
        ubicacion={"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3346.232294638036!2d-58.51366338481242!3d-32.99765068090592!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95b0078302dc7bc1%3A0x1aa0820f51759d2!2sBelgrano%20736%2C%20Gualeguaych%C3%BA%2C%20Entre%20R%C3%ADos!5e0!3m2!1ses-419!2sar!4v1639034020937!5m2!1ses-419!2sar"}
      />
      <InstitucionesBrota />
      <Testimonios testimonios={testimonios}></Testimonios>
       <ContactoBrota titulo="ADQUIRIR “SERVICIOS BROTA”" mail="brota.gchu@hogardecristo.org.ar" telefono="(0)3446 - (15) 562 - 482" linkRedes="https://www.facebook.com/Brota-la-marca-del-Hogar-110062414093260" facebook="facebook.com//Brota-la-marca-del-Hogar"  />
    </>
  );
};

export default BrotaProductos;
