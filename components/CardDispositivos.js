import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import MapasConDireccion from "./MapasConDireccion";

const CardDispositivos = ({
  imagen,
  titulo,
  subtitulo,
  texto,
  textoDos,
  textButton ="",
  linkBrota,
  botonTexto,
  tituloMapa,
  subtituloMapa,
  textoMapa,
  textoDosMapa,
  ubicacion,
}) => {
  const [show, setShow] = useState(true);
  const [mostrar, setMostrar] = useState(true);
  return (
    <div>
      <div className="container movil my-5">
        <div className="row mt-5">
          <div className="col-12 col-md-6">
            {<img src={imagen} className="mt-2 img-fluid" alt="voluntarios" />}
          </div>
          <div className="col-12 col-md-6">
            <div className="row title mt-2">
              <div className="line-dec-"></div>
              <h2>{titulo}</h2>
            </div>
            <div className="row mt-1 mb-1">
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
              <button
                className="btn btn-ubicaciones"
                type="button"
                onClick={() => {
                  setMostrar(!mostrar);
                }}
              >
                {mostrar? "VER UBICACIÓN" : "OCULTAR UBICACIÓN"}
              </button>
              {textButton && (
              <Button className="btn-contratar">
                <a className="a-blancos" href={linkBrota}>{botonTexto}</a>
              </Button>
              )}
            </div>
          </div>
          <div className="col-12">
            <div>{!mostrar && <MapasConDireccion tituloMapa={tituloMapa} subtituloMapa={subtituloMapa} textoMapa={textoMapa} textoDosMapa={textoDosMapa} ubicacion={ubicacion} />}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardDispositivos;
