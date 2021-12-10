import React from "react";

const MapasConDireccion = ({
    tituloMapa,
    subtituloMapa,
    textoMapa,
    textoDosMapa,
    ubicacion,
  }) => {
    return (
        <>
        <div className="container movil my-5">
            <div className="row mt-5">
                <div className="col-12 col-md-6">
                    <div className="line-dec"></div>
                    <h3 className="mb-5 w-700">{tituloMapa}</h3>
                    <h5>{subtituloMapa}</h5>
                    <p className="mb-1">{textoMapa}</p>
                    <p>{textoDosMapa}</p>
                </div>
                <div className="col-12 col-md-6">
                    <iframe className="mt-2 iframe-fluid" src={ubicacion} width={550} height={200}></iframe>
                </div>
            </div>
        </div>
        </>
      );
};

export default MapasConDireccion;