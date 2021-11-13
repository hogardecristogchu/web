import React from "react";
import MapDispositivos from "./MapDispositivos";
import Button from "react-bootstrap/Button";

const CardDispositivos = ({
  imagen,
  titulo,
  subtitulo,
  texto,
  textoDos,
  textButton = "",
  source,
}) => {
  return (
    <div>
      <div className="container my-5">
        <div className="row mt-5">
          <div className="col-12 col-md-6">
            {<img src={imagen} className="mt-2 img-fluid" alt="voluntarios" />}
            <MapDispositivos source={source} />
          </div>
          <div className="col-12 col-md-6">
            <div className="row title mt-2">
              <h2>{titulo}</h2>
            </div>
            <div className="row mb-4">
              <h4>{subtitulo}</h4>
            </div>
            <div className="row">
              <p>{texto} </p>
              <p>{textoDos} </p>
            </div>
            {textButton && (
              <Button className="boton-slider">
                COMPRAR NUESTROS PRODUCTOS
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardDispositivos;
