import React from "react";
import CardDispositivos from "./CardDispositivos";
import Testimonios from "./Testimonios";

const ElRefugio = () => {
  const testimonios = [
    {
      testimonio:
        "Es mi casa, en ella pude corregir algunos aspectos de mi vida",
      testigo: "Martin, 58 años.",
    },
    {
      testimonio:
        "Es mi casa, lugar de contención, donde cuidan mi salud",
      testigo: "Ramon, 61 años",
    }
  ];
  return (
    <>
      <CardDispositivos
        imagen={"/dispositivos/El-Refugio.jpg"}
        titulo={"EL REFUGIO"}
        subtitulo={"El comienzo de una nueva vida. El refugio es: contención, sin prejuicios, respeto y comunidad"}
        texto={
          "El refugio se ubica en el barrio Suburbio Sur de nuestra ciudad. Este dispositivo, que comenzó a construirse a principios del 2019, complementa a los Centros Barriales, en tanto ofrece alojamiento a las personas que concurren a los mismos y que no poseen lugar donde dormir por las noches"
        }
        textoDos={
          "El refugio es mucho más que un techo y un lugar digno donde poder higienizarse y dormir, es una primera familia que rompe con la soledad de la calle, es una comunidad de personas que trazan lazos sociales y se acompañan en los desafíos de la vida diaria."
        }
        source={"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3346.232294638036!2d-58.51366338481242!3d-32.99765068090592!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95b0078302dc7bc1%3A0x1aa0820f51759d2!2sBelgrano%20736%2C%20Gualeguaych%C3%BA%2C%20Entre%20R%C3%ADos!5e0!3m2!1ses-419!2sar!4v1636745305293!5m2!1ses-419!2sar"}
      />
      <Testimonios testimonios={testimonios}></Testimonios>
    </>
  );
};

export default ElRefugio;
