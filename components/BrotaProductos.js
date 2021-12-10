import React from "react";
import CardDispositivos from "./CardDispositivos";
import ContactosIndividuales from "./ContactosIndividuales";
import ColegiosBrota from "./ColegiosBrota";
import Testimonios from "./Testimonios";
import ContactoBrota from "./ContactoBrota";

const BrotaProductos = () => {
  const testimonios = [
    {
      testimonio:
        "Brota es una experiencia muy linda para mi, es un acompañamiento, un trabajo digo.",
      testigo: "Yamila, 37 años",
    },
    {
      testimonio:
        "Brota para mi es una ayuda. Es el compañerismo",
      testigo: "Johana 35 años",
    }
  ];
  return (
    <>
      <CardDispositivos
        imagen={"/dispositivos/Brota-Productos.jpg"}
        titulo={"BROTA PRODUCTOS"}
        subtitulo={"”Si puedes soñarlo, puedes hacerlo”"}
        texto={"Brota productos nació ante la necesidad de generar fuentes de trabajo para mujeres de los diferentes centros barriales. Luego de constatar la dificultad que existía para que las mujeres se sumaran a la cooperativa de servicios, se proyectó un modelo de negocios donde fuera posible para las mujeres compatibilizar el trabajo con sus realidades."}
        textoDos={"En la actualidad, Brota productos ofrece principalmente productos textiles que son vendidos en comercios, en ferias de emprendedores y en talleres de sensibilización que se ofrecen en los colegios de la ciudad."}
        textButton
        botonTexto={"COMPRAR NUESTROS PRODUCTOS"}
        linkBrota={"/comprar_brota"}
        tituloMapa={"UBICACIÓN"} 
        subtituloMapa={"BROTA"}
        textoMapa={"Belgrano 736 "}
        textoDosMapa={"Gualeguaychú, Entre Ríos"}
        ubicacion={"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3346.232294638036!2d-58.51366338481242!3d-32.99765068090592!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95b0078302dc7bc1%3A0x1aa0820f51759d2!2sBelgrano%20736%2C%20Gualeguaych%C3%BA%2C%20Entre%20R%C3%ADos!5e0!3m2!1ses-419!2sar!4v1639034020937!5m2!1ses-419!2sar"}
      />
      <ColegiosBrota />
      <Testimonios testimonios={testimonios}></Testimonios>
      <ContactoBrota titulo="COMPRAR “PRODUCTOS BROTA”" mail="brota.gchu@hogardecristo.org.ar" telefono="(0)3446 - (15) 590 - 098" linkRedes="https://www.facebook.com/Brota-la-marca-del-Hogar-110062414093260" facebook="facebook.com/Brota-la-marca-del-Hogar" />
      
    </>
  );
};

export default BrotaProductos;
