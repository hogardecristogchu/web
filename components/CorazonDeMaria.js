import React from 'react';
import CardDispositivosSinMapa from "./CardDispositivosSinMapa";
import ContactosIndividuales from "./ContactosIndividuales";
import Testimonios from "./Testimonios";

const CorazonDeMaria = () => {
  const testimonios = [
    {
      testimonio:
        "Corazón de María fue una oportunidad para poder recuperar mi vida y mi familia.",
      testigo: "Florencia, 21 años",
    },
    {
      testimonio:
        "Para mí es una familia más, un lugar en el que me ayudaron mucho a salir adelante, estoy muy agradecida a todas las chicas. Hoy puedo decir que estoy muy bien y muy bien acompañada y muchas gracias por todas las oportunidades que me han dado. Las quiero inmensamente!",
      testigo: "Yamila, 37 años.",
    }
  ];
  return (
    <>
      <CardDispositivosSinMapa
        imagen={"/dispositivos/CorazonDeMaria.jpg"}
        titulo={"CORAZÓN DE MARÍA"}
        subtitulo={"Corazón de María es un espacio para mujeres que acompaña con amor el camino hacia su recuperación. Empoderándolas como mujeres y madres. Generando tanto un proyecto personal como así también un vínculo maternal amoroso y responsable."}
        texto={"Corazón de María se ubica en el barrio “La Cuchilla” de nuestra ciudad. Abrió sus puertas en agosto de 2017. Este dispositivo surge debido a la necesidad de poder acompañar a mujeres, muchas madres, en situación de consumo problemático."}
        textoDos={"Corazón de María es un lugar de contención y de reaprendizaje en su rol materno, de recuperación, de empoderamiento social y económico, y de generación de vínculos saludables y redes que favorecen el tránsito hacia una vida sin consumo. En este lugar se llevan a cabo diversas actividades tales como talleres de costura, espacios de espiritualidad, terapéuticos, hockey, actividades prácticas, grupo de familia, entre otras."}
      />
      <Testimonios  testimonios={testimonios}></Testimonios>
      <ContactosIndividuales titulo="Centro Barrial Corazón de Maria" mail="casacorazondemariagchu@gmail.com" linkRedes="https://www.facebook.com/Centro-Barrial-Coraz%C3%B3n-de-Mar%C3%ADa-Hogar-de-Cristo-Gch%C3%BA-Casa-de-mujeres-108104811709999" facebook="facebook.com/Centro-Barrial-Corazón-de-María"></ContactosIndividuales>
    </>
  );
};

export default CorazonDeMaria;
