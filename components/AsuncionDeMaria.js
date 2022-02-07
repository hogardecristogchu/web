
import React from "react";
import CardDispositivos from "./CardDispositivos";
import ContactosIndividuales from "./ContactosIndividuales";
import Testimonios from "./Testimonios";

const AsuncionDeMaria = () => {
  const testimonios = [
    {
      testimonio:
        "Para mí fue un gran paso para dejar las drogas. Me enseñó que nunca es tarde para recuperar mi vida, y me enseñó como ser un padre para el día del reencuentro con mi hijo y me enseñó que los problemas no se arreglan a las piñas y acompañar otros chicos con la misma problemática que yo.",
      testigo: "Francisco, 42 años",
    },
    {
      testimonio:
        "Para mí es un espacio de contención. Es mi segunda familia. Yo en Asunción aprendí a respetar, estar con chicos en consumo que día a día estamos peleando con la enfermedad que es de por vida. La pasamos bien y me ayuda a ser una persona buena, respetuosa, responsable y querer abrazar al caído.",
      testigo: "Daniel, 29 años.",
    }
  ];
  return (
    <div id="asunciondemaria">
      <CardDispositivos
        imagen={"/dispositivos/Asuncion.jpg"}
        titulo={"ASUNCIÓN DE MARÍA"}
        subtitulo={"“Tener un lugar a donde ir, se llama hogar. Tener personas a quien amar, se llama familia, y tener ambas se llama Bendición.”"}
        texto={"Asunción de María se ubica en el Barrio 338 de la ciudad de Gualeguaychú y nació desde la necesidad de dar una respuesta al problema del consumo de sustancias en la zona oeste de la ciudad. Abrió sus puertas como Centro de Día en Abril de 2017."}
        textoDos={"En Asunción de María se acompañan a personas, tanto a hombres y mujeres, como a niños, en contextos de consumo problemático. Este espacio cuenta con talleres de musicoterapia, básquet, taller de manualidades, grupo de escucha, espiritualidad, asesoramiento legal, entre otros. Y para los niños espacios de juegos y estimulación temprana. Además, este dispositivo cuenta con espacios deportivos y un amplio parque para poder realizar actividades sociales durante todo el año."}
        tituloMapa={"UBICACIÓN"} 
        subtituloMapa={"CENTRO BARRIAL ASUNCIÓN DE MARÍA"}
        textoMapa={"Gervasio Méndez entre Nágera y C. Bomberos Voluntarios."}
        textoDosMapa={"Gualeguaychú, Entre Ríos"}
        ubicacion={"https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3345.6784696399195!2d-58.54602886375428!3d-33.01225144285584!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95b007f9a95d61d9%3A0x581caf81ef412114!2sParroquia%20%22Asunci%C3%B3n%20de%20Maria%22!5e0!3m2!1ses-419!2sar!4v1639028883037!5m2!1ses-419!2sar"}
      />
      <Testimonios testimonios={testimonios}></Testimonios>
      <ContactosIndividuales titulo="Centro Barrial Asunción de Maria" mail="hcasunciondemaria@gmail.com" linkRedes="https://www.facebook.com/hogardecristo.d.asunciondemaria" facebook="facebook.com/hogardecristo.d.asunciondemaria"></ContactosIndividuales>
    </div>
  );
};

export default AsuncionDeMaria;
