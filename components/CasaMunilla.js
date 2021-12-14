import React from "react";
import CardDispositivos from "./CardDispositivos";
import Testimonios from "./Testimonios";
import { BsTelephoneFill } from "react-icons/bs";

const CasaMunilla = () => {
  const testimonios = [
    {
      testimonio:
        "Para mí Casita Munilla representa tranquilidad y poder expresar lo que siento. Además el acompañamiento que me dan, poder hablar con alguien.",
      testigo: "Paola, 41 años",
    },
    {
      testimonio:
        "Casita es un lugar al que me gusta ir, voy con muchas ganas! Me gusta el compañerismo de las chicas del taller y grupo. Me siento acompañada yo y mi hija",
      testigo: "Sabrina, 28 años",
    },
  ];
  return (
    <div id="casamunilla">
      <CardDispositivos
        imagen={"/dispositivos/CB-Casa-Munilla.jpg"}
        titulo={"Casa Munilla"}
        subtitulo={"”Es un espacio de contención y donde encontrar nuevas oportunidades tanto para varones como mujeres y niños. Un lugar de transformación a través del amor y del acompañamiento. Donde mujeres, madres y padres puedan empoderarse y lograr un vínculo de amor y cuidado responsable de sus hijos, para que ellos tengan una infancia feliz.”"}
        texto={"Casa Munilla se ubica en el Barrio Munilla de nuestra ciudad. Abrió sus puertas como centro de día a finales del 2020. Este dispositivo nace a partir de un conflicto vecinal, y crece ante la necesidad de ofrecer un espacio de convivencia y contención dentro del barrio."}
        textoDos={
          "En el mismo se acompañan a hombres, mujeres y niños y se ofrecen diversas actividades como ser: actividades deportivas, talleres de oficio, espacios individuales de escucha, asesoramiento legal, espacios terapéuticos y espacios de juegos y estimulación temprana."
        }
        tituloMapa={"UBICACIÓN"} 
        subtituloMapa={"CENTRO BARRIAL CASA MUNILLA"}
        textoMapa={"Mitre 519. "}
        textoDosMapa={"Gualeguaychú, Entre Ríos"}
        ubicacion={"https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1672.766473083975!2d-58.5101477!3d-33.016087!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95baa832ba0d8d31%3A0xbdc90559de107a17!2sMitre%20519%2C%20Gualeguaych%C3%BA%2C%20Entre%20R%C3%ADos!5e0!3m2!1ses-419!2sar!4v1639029169515!5m2!1ses-419!2sar"}
      />
      <Testimonios testimonios={testimonios}></Testimonios>
      <div className="container mt-2 mb-6">
            <div className="row title">
                <h2 className="text-center pb-3">Contacto</h2>
            </div>
            <div className="movil-card card-contactos text-center mt-2">

                    <h5 className="title-contactos">Casa Munilla</h5>
                    <p className="text-contacto"><BsTelephoneFill  className="contacto-icon" />Celular: (03446) 15  358  222 (sólo por la mañana)</p>
            </div>
      </div>
    </div>
  );
};

export default CasaMunilla;
