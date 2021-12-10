import React from 'react';
import ColaborarVoluntariado from "../components/ColaborarVoluntariado";
import Testimonios from "../components/Testimonios";

const FormVoluntariado = () => {
     const testimonios = [
    {
      testimonio:
        "Soy voluntaria del Hogar de Cristo porque soy mamá y soy abuela, yo no puedo ser indiferente a lo que está pasando en el mundo, a lo que significa la destrucción del ser humano a través de la droga y cualquier otra adicción. Yo tenía que poner mi granito de arena.",
      testigo: "Cata, 70 años",
    },
    {
      testimonio:
        "Ser voluntaria del Hogar de Cristo es poder dar  una mano a alguien que necesite algo concreto en algún momento. Es intentar devolver un poquito de todo lo bueno que el Hogar hace. Es involucrarme de corazón a corazón con otros.",
      testigo: "Magda, 39 años",
    },
    {
      testimonio:
        "Ser parte del hogar es para mi principalmente amor. Es ser empático, comprometido, compañero y solidario. Es crecimiento y superación personal ante cada desafío, es enriquecimiento mutuo entre todas las personas, desde las que acompañamos hasta los pares dentro de los equipos. Es ver la vida desde otra perspectiva, más real y humana.",
      testigo: "Sofía, 23 años",
    },
  ];
    return (
       <div className="container-paginas">
           <ColaborarVoluntariado/>
           <Testimonios testimonios={testimonios}></Testimonios>
       </div>
      );
    };
    
export default FormVoluntariado;