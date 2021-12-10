import React from "react";
import CardDispositivos from "./CardDispositivos";
import ContactosIndividuales from "./ContactosIndividuales";
import Testimonios from "./Testimonios";

const EspacioPrimeraInfancia = () => {
  const testimonios = [
    {
      testimonio:
        "Jesús niño para mi es el amor, hacer amigos, compartir, jugar, hacer cosas con las seños y divertirse",
      testigo: "Franco, 9 años",
    },
    {
      testimonio:
        "Jesús niño es un corazón como de amor para mí",
      testigo: "Priscila, 5 años",
    },
    {
      testimonio:
        "Para mi Jesús niño es un espacio muy importante para la crianza de nuestros chicos, porque nos acompañan en las diferentes problemáticas de cada familia, ellos se sienten contenidos, acompañados, entre juegos y risas. Y para mi como mamá es muy importante que me acompañe Jesús niño porque me ayuda a entender muchas cosas de la crianza, a entender sus reacciones.",
      testigo: "Mabel, mamá.",
    },
    {
      testimonio:
        "En Jesús niño me ayudan a criar a mi hijo de otra manera, con amor, paciencia y escucharlo",
      testigo: "Flor, mamá.",
    }
  ];
  return (
    <>
      <CardDispositivos
        imagen={"/dispositivos/EPI-Jesus.jpg"}
        titulo={"JESUS NIÑO EPI"}
        subtitulo={"Poner al niño en el centro de la escena"}
        texto={
          "Jesús Niño es un Espacio de Primera Infancia (EPI) que comenzó a dar sus primeros pasos en el Centro Barrial Corazón de María en julio de 2018 y desde noviembre de ese mismo año, comenzó a recibir a los niños en sus propias instalaciones."
        }
        textoDos={
          "“Jesús Niño” es un espacio que busca poner a la infancia en el centro de la escena en un contexto familiar atravesado por la exclusión social y las adicciones. Se busca acompañarlos, estimularlos y cuidarlos desde un lugar amoroso, familiar y profesional. La atención y el afecto hacia estos niños es fundamental para garantizar su desarrollo integral."
        }
        source={"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3346.232294638036!2d-58.51366338481242!3d-32.99765068090592!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95b0078302dc7bc1%3A0x1aa0820f51759d2!2sBelgrano%20736%2C%20Gualeguaych%C3%BA%2C%20Entre%20R%C3%ADos!5e0!3m2!1ses-419!2sar!4v1636745229270!5m2!1ses-419!2sar"}
      />
      <Testimonios testimonios={testimonios}></Testimonios>
      <ContactosIndividuales titulo="EPI Jesus Niño" mail="epijesusninio@hogardecristo.org.ar" linkRedes="https://www.facebook.com/epijesusninio" facebook="facebook.com/epijesusninio"></ContactosIndividuales>
    </>
  );
};

export default EspacioPrimeraInfancia;
