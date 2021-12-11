import React from 'react';

const ColegiosBrota = () => {
    return (
        <>
        <div className="p-movil container m-6">
            <div className="row title">
                <div className="line-dec-1"></div>
                <h2 className="pb-3">BROTA EN INSTITUCIONES Y COLEGIOS:</h2>
                <p>Desde Brota desarrollamos un taller de emociones con el doble objetivo de difundir el proyecto y prevenir conductas de riesgo, como el consumo de sustancias o la violencia. El taller se conforma de dos partes, una primera parte orientada a abordar las emociones y una segunda parte orientada a invitar a los niños y jóvenes a comprometerse con la causa.</p>
                <p>Aprender a comprender y manejar los estados emocionales desde temprana edad permite prepararse para afrontar los retos de la vida adolescente y adulta, y constituyen un factor preventivo ante conductas de riesgo. Por eso introducir estos temas desde la infancia resultan de suma importancia. </p>
            </div>
            <div className="row mt-3 mb-3">
                <div className="col-12">
                    <p className="t-colegios">Colegios e instituciones que confiaron en Brota:</p>
                </div>
                <div className="col-6 col-md-3 mb-4">
                    <img src="/brota/La-salle-Villa-Malvina-.png" className="mt-2 img-colegios img-fluid" alt="Colegios" />
                </div>
                <div className="col-6 col-md-3 mb-4">
                    <img src="/brota/las_victorias.png" className="mt-2 img-colegios img-fluid" alt="Colegios" />
                </div>
                <div className="col-6 col-md-3 mb-4">
                    <img src="/brota/villa-malvina.png" className="mt-2 img-colegios img-fluid" alt="Colegios" />
                </div>
                <div className="col-6 col-md-3 mb-4">
                    <img src="/brota/sagrada_familia.png" className="mt-2 img-colegios img-fluid" alt="Colegios" />
                </div>
            </div>
      </div>
        </>
     );
   };
   
export default ColegiosBrota;