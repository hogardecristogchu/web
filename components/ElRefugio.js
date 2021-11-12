import React from "react";
import CardDispositivos from "./CardDispositivos";
import Testimonios from "./Testimonios";

const ElRefugio = () => {
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
        imagen={"/dispositivos/El-Refugio.jpg"}
        titulo={"EL REFUGIO"}
        subtitulo={"Loren ipsum"}
        texto={
          "El refugio se ubica en el barrio la Suburbio Sur de nuestra ciudad. Este espacio complementa a los centros barriales del Hogar, que cuentan con equipamiento para realizar las actividades diurnas, en tanto ofrece alojamiento a las personas que concurren de día al Hogar a realizar los talleres o a ser parte de los espacios de acompañamiento terapéuticos, y que no poseen lugar donde alojarse por las noches.El objetivo es ofrecer a personas que están en situación de calle un lugar digno donde poder higienizarse y dormir por las noches con la finalidad de acompañar la búsqueda de autonomía.Este dispositivo comenzó a construirse a principios del 2019 y si bien ya recibe gente aún no ha sido inaugurado formalmente."
        }
        source={"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3346.232294638036!2d-58.51366338481242!3d-32.99765068090592!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95b0078302dc7bc1%3A0x1aa0820f51759d2!2sBelgrano%20736%2C%20Gualeguaych%C3%BA%2C%20Entre%20R%C3%ADos!5e0!3m2!1ses-419!2sar!4v1636745305293!5m2!1ses-419!2sar"}
      />
      <Testimonios testimonios={testimonios}></Testimonios>
    </>
  );
};

export default ElRefugio;
