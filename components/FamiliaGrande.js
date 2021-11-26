import React from "react";
import CardDispositivosSinMapa from "./CardDispositivosSinMapa";

const FamiliaGrande = () => {
    return (
        <>
          <CardDispositivosSinMapa
            imagen={"/dispositivos/Familia-grande.jpg"}
            titulo={"FAMILIA GRANDE "}
            texto={"Somos parte de una Federación que agrupa a los Hogares de Cristo de Argentina, que tienen como finalidad dar respuesta integral a situaciones de vulnerabilidad social y/o consumos problemáticos de sustancias psicoactivas, poniendo siempre en primer lugar a la persona y sus cualidades."}
            textoDos={"Nuestro sitio web: https://hogardecristo.org.ar/"}
          />
        </>
      );
    };
    
    export default FamiliaGrande;