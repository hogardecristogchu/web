
import React from "react";
import CardDispositivosSinMapa from "./CardDispositivosSinMapa";
import ContactosIndividuales from "./ContactosIndividuales";
import Testimonios from "./Testimonios";

const AsuncionDeMaria = () => {
  const testimonios = [
    {
      testimonio:
        "Para mí fue un gran paso para dejar las drogas. Me enseñó que nunca es tarde para recuperar mi vida, y me enseñó como ser un padre para el día del reencuentro con mi hijo y me enseñó que los problemas mo se arreglan a las piñas y acompañar otros chicos con la misma problemática que yo",
      testigo: "Francisco, 42 años",
    },
    {
      testimonio:
        "Para mí es un espacio de contención. Es mi segunda familia. Yo en Asunción aprendí a respetar, estar con chicos en consumo que día a día estamos peleando con la enfermedad que es de por vida. La pasamos bien y me ayuda a ser una persona buena, respetuosa, responsable y querer abrazar al caído",
      testigo: "Daniel, 29 años.",
    }
  ];
  return (
    <>
      <CardDispositivosSinMapa
        imagen={"/dispositivos/Asuncion.jpg"}
        titulo={"ASUNCIÓN DE MARÍA"}
        subtitulo={"Loren ipsum"}
        texto={"Asunción de María se ubica en el Barrio 338 de la ciudad de Gualeguaychú y nació desde la necesidad de dar una respuesta al problema del consumo de sustancias en la zona oeste de la ciudad. Abrió sus puertas como Centro de Día en agosto de 2018."}
        textoDos={"En Asunción de María se acompañan a personas, tanto a hombres y mujeres, como a niños, en contextos de consumo problemático. Este espacio cuenta con talleres de musicoterapia, básquet, taller de manualidades, grupo de escucha, espiritualidad, asesoramiento legal, entre otros. Y para los niños espacios de juegos y estimulación temprana. Además, este dispositivo cuenta con espacios deportivos y un amplio parque para poder realizar actividades sociales durante todo el año."}
      />
      <Testimonios testimonios={testimonios}></Testimonios>
      <ContactosIndividuales titulo="Centro Barrial Asunción de Maria" mail="hcasunciondemaria@gmail.com" linkRedes="https://www.facebook.com/hogardecristo.d.asunciondemaria" facebook="facebook.com/hogardecristo.d.asunciondemaria"></ContactosIndividuales>
    </>
  );
};

export default AsuncionDeMaria;
