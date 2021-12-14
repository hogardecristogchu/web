import React from "react";
import CardDispositivos from "./CardDispositivos";
import Testimonios from "./Testimonios";
import { BsFillEnvelopeFill } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";

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
        titulo={"EPI JESÚS NIÑO"}
        subtitulo={"“Poner al niño en el centro de la escena”"}
        texto={
          "Jesús Niño es un Espacio de Primera Infancia (EPI) que comenzó a dar sus primeros pasos en el Centro Barrial Corazón de María en julio de 2018 y desde noviembre de ese mismo año, comenzó a recibir a los niños en sus propias instalaciones."
        }
        textoDos={
          "“Jesús Niño” es un espacio que busca poner a la infancia en el centro de la escena en un contexto familiar atravesado por la exclusión social y las adicciones. Se busca acompañarlos, estimularlos y cuidarlos desde un lugar amoroso, familiar y profesional. La atención y el afecto hacia estos niños es fundamental para garantizar su desarrollo integral."
        }
        tituloMapa={"UBICACIÓN"} 
        subtituloMapa={"JESUS NIÑO ESPACIO DE PRIMERA INFANCIA"}
        textoMapa={"Juan B. Justo 525 (Calle 540 entre Belgrano y Roque Saenz Peña) "}
        textoDosMapa={"Gualeguaychú, Entre Ríos"}
        ubicacion={"https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3346.2038166462644!2d-58.5117549!3d-32.9984016!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95b0079e75c8d5ad%3A0x4d2ee76944298764!2sCentro%20de%20Acceso%20a%20la%20Justicia!5e0!3m2!1ses-419!2sar!4v1639030554952!5m2!1ses-419!2sar"}
      />
      <Testimonios testimonios={testimonios}></Testimonios>
      <div className="container mt-2 mb-5">
            <div className="row title">
                <h2 className="text-center pb-3">Contacto</h2>
            </div>
            <div className="movil-card card-contactos text-center mt-2">
                    <h5 className="title-contactos">EPI Jesus Niño</h5>
                    <p className="text-contacto"><BsFillEnvelopeFill  className="contacto-icon" />epijesusninio@hogardecristo.org.ar</p>
                    <p className="text-contacto"><BsFacebook className="contacto-icon" /><a href="https://www.facebook.com/epijesusninio" rel="noreferrer" className="contacto-a" target="_blank">facebook.com/epijesusninio</a></p>
                    <p className="text-contacto"><BsInstagram  className="contacto-icon" /><a href="https://www.instagram.com/epijesusnino/" rel="noreferrer" className="contacto-a" target="_blank">instagram.com/epijesusnino</a></p>
            </div>
        </div>
    </>
  );
};

export default EspacioPrimeraInfancia;
