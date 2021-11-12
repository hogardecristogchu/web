import React from 'react';
import MapEpi from './MapEpi';

const EspacioPrimeraInfancia = () => {
    return (
        <>
            <div className="container my-5">
                <div className="row mt-5">
                    <div className="col-12 col-md-6">
                        <img src="/dispositivos/EPI-Jesus.jpg" className="mt-2 img-fluid" alt="voluntarios" />
                        <MapEpi />
                    </div>
                    <div className="col-12 col-md-6">
                        <div className="row title mt-4"><h2>EPI ESPACIO DE PRIMERA INFANCIA</h2></div>
                        <div className="row mb-4"><h4>Loren ipsum</h4></div>
                        <div className="row"><p>El EPI es un espacio de primera infancia que comenzó a dar sus primeros pasos en las instalaciones de Corazón de María en julio de 2018 y desde noviembre de ese mismo año (2018) comenzó a recibir a los niños en su propio espacio.</p></div>
                        <div className="row"><p>El EPI “Jesús Niño” es un espacio que busca poner al Niño/a en el centro de la escena en un contexto familiar atravesado por la exclusión social y adicciones. </p></div>
                        <div className="row"><p>Se busca acompañarlo, estimularlo y cuidarlo desde un lugar amoroso y profesional.</p></div>
                        <div className="row"><p>La atención, la contención y el afecto hacia estos niños es fundamental para garantizar su desarrollo integral.</p></div>
                    </div>
                </div>
            </div>
            <div className="container my-5">
                <div className="row title"><h2>Testimonios</h2></div>
                <div className="row mt-1">
                    <div className="card">
                        <div className="card-body">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        <p>Marcelo, 28 años</p>
                        </div>
                    </div>
                </div>
                <div className="row mt-1">
                    <div className="card">
                        <div className="card-body">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        <p>Juana, 53 años</p>
                        </div>
                    </div>
                </div>
                <div className="row mt-1">
                    <div className="card">
                        <div className="card-body">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        <p>Mariana, 23 años</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default EspacioPrimeraInfancia