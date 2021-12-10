import React, { useState } from 'react';
import Button from "react-bootstrap/Button";

const CardDispositivos = ({
  imagen,
  alt,
  titulo,
  subtitulo,
  texto,
  textoDos,
  textButton = "",
}) => {
  const [show, setShow] = useState(true);
  return (
    <div>
      <div className="container movil my-5">
        <div className="row mt-5">
          <div className="col-12 col-md-6">
              {<img src={imagen} className="mt-2 img-fluid" alt={alt} />}
          </div>
          <div className="col-12 col-md-6">
            <div className="row title mt-2">
              <div className="line-dec-"></div>
              <h2>{titulo}</h2>
            </div>
            <div className="row mb-1 mt-1">
              <p className="subtitulo-dispositivos">{subtitulo}</p>
            </div>
            <div className="row">
              <p>{texto} </p>
              <div>{!show && <p>{textoDos}</p>}</div>
              <button
                className="btn btn-dispositivos"
                type="button"
                onClick={() => {
                  setShow(!show);
                }}
                >
                {show ? "LEER MÁS" : "LEER MENOS"}
              </button>
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
