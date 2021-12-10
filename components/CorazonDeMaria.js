import React from 'react';
import CardDispositivos from "./CardDispositivos";
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
      <CardDispositivos
        imagen={"/dispositivos/CorazonDeMaria.jpg"}
        titulo={"CORAZÓN DE MARÍA"}
        subtitulo={"“Corazón de María es un espacio para mujeres que acompaña con amor el camino hacia su recuperación. Empoderándolas como mujeres y madres. Generando tanto un proyecto personal como así también un vínculo maternal amoroso y responsable”"}
        texto={"Corazón de María se ubica en el barrio “La Cuchilla” de nuestra ciudad. Abrió sus puertas en agosto de 2017. Este dispositivo surge debido a la necesidad de poder acompañar a mujeres, muchas madres, en situación de consumo problemático."}
        textoDos={"Corazón de María es un lugar de contención y de reaprendizaje en su rol materno, de recuperación, de empoderamiento social y económico, y de generación de vínculos saludables y redes que favorecen el tránsito hacia una vida sin consumo. En este lugar se llevan a cabo diversas actividades tales como talleres de costura, espacios de espiritualidad, terapéuticos, hockey, actividades prácticas, grupo de familia, entre otras."}
        tituloMapa={"UBICACIÓN"} 
        subtituloMapa={"CENTRO BARRIAL CORAZON DE MARÍA"}
        textoMapa={"Belgrano 747 "}
        textoDosMapa={"Gualeguaychú, Entre Ríos"}
        ubicacion={"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3346.230557727!2d-58.51371628481238!3d-32.99769648090585!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95b00782fd62fca5%3A0x4f9a4b32b5c3dd71!2sBelgrano%20747%2C%20Gualeguaych%C3%BA%2C%20Entre%20R%C3%ADos!5e0!3m2!1ses-419!2sar!4v1639028267763!5m2!1ses-419!2sar"}
      />
      <Testimonios  testimonios={testimonios}></Testimonios>
      <ContactosIndividuales titulo="Centro Barrial Corazón de Maria" mail="casacorazondemariagchu@gmail.com" linkRedes="https://www.facebook.com/Centro-Barrial-Coraz%C3%B3n-de-Mar%C3%ADa-Hogar-de-Cristo-Gch%C3%BA-Casa-de-mujeres-108104811709999" facebook="facebook.com/Centro-Barrial-Corazón-de-María"></ContactosIndividuales>
    </>
  );
};

export default CorazonDeMaria;
