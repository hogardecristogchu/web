import React from "react";
import CardDispositivosSinMapa from "./CardDispositivosSinMapa";
import ContactosIndividuales from "./ContactosIndividuales";
import Testimonios from "./Testimonios";

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
      <CardDispositivosSinMapa
        imagen={"/dispositivos/Brota-Productos.jpg"}
        titulo={"BROTA PRODUCTOS"}
        subtitulo={"Si puedes soñarlo, puedes hacerlo"}
        texto={
          "Brota productos nació ante la necesidad de generar fuentes de trabajo para mujeres de los diferentes centros barriales. Luego de constatar la dificultad que existía para que las mujeres se sumaran a la cooperativa de servicios, se proyectó un modelo de negocios donde fuera posible para las mujeres compatibilizar el trabajo con sus realidades."
        }
        textoDos={
          "En la actualidad, Brota productos ofrece principalmente productos textiles que son vendidos en comercios, en ferias de emprendedores y en talleres de sensibilización que se ofrecen en los colegios de la ciudad."
        }
        textButton={"COMPRAR NUESTROS PRODUCTOS"}
      />
      <Testimonios testimonios={testimonios}></Testimonios>
      <ContactosIndividuales titulo="Cooperativa Brota" mail="brota.gchu@hogardecristo.org.ar" linkRedes="https://www.facebook.com/Brota-la-marca-del-Hogar-110062414093260" facebook="facebook.com/Brota-la-marca-del-Hogar"></ContactosIndividuales>
    </>
  );
};

export default BrotaProductos;
