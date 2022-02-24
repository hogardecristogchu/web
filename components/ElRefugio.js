import React from "react";
import CardDispositivos from "./CardDispositivos";
import Testimonios from "./Testimonios";
import { BsTelephoneFill } from "react-icons/bs";

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
        subtitulo={"“El comienzo de una nueva vida. El refugio es: contención, sin prejuicios, respeto y comunidad.”"}
        texto={
          "El refugio se ubica en el barrio Suburbio Sur de nuestra ciudad. Este dispositivo, que comenzó a construirse a principios del 2019, complementa a los Centros Barriales, en tanto ofrece alojamiento a las personas que concurren a los mismos y que no poseen lugar donde dormir por las noches."
        }
        textoDos={
          "El refugio es mucho más que un techo y un lugar digno donde poder higienizarse y dormir, es una primera familia que rompe con la soledad de la calle, es una comunidad de personas que trazan lazos sociales y se acompañan en los desafíos de la vida diaria."
        }
        tituloMapa={"UBICACIÓN"} 
        subtituloMapa={"EL REFUGIO"}
        textoMapa={"Acisclo Méndez s/n "}
        textoDosMapa={"Gualeguaychú, Entre Ríos"}
        ubicacion={"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3345.246379195225!2d-58.53421648481175!3d-33.02363888089821!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xd26c7d142268e21b!2zMzPCsDAxJzI1LjEiUyA1OMKwMzEnNTUuMyJX!5e0!3m2!1ses!2sar!4v1639031219497!5m2!1ses!2sar"}
      />
      <Testimonios testimonios={testimonios}></Testimonios>
      <div className="container mt-2 mb-5">
            <div className="row title">
                <h2 className="text-center pb-3">Contacto</h2>
            </div>
            <div className="movil-card card-contactos text-center mt-2">
                    <h5 className="title-contactos">El Refugio</h5>
                    <p className="text-contacto"><BsTelephoneFill  className="contacto-icon" />Celular: (03446) 15 494 608</p>
            </div>
      </div>
    </>
  );
};

export default ElRefugio;
