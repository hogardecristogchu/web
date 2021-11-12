import React from 'react';
import MapEpi from './MapEpi';

const CasaMunilla = () => {
    return (
        <>
            <div className="container my-5">
                <div className="row mt-5">
                    <div className="col-12 col-md-6">
                        <img src="/dispositivos/CB-Casa-Munilla.jpg" className="mt-2 img-fluid" alt="voluntarios" />
                        <MapEpi />
                    </div>
                    <div className="col-12 col-md-6">
                        <div className="row title mt-2"><h2>Casa Munilla</h2></div>
                        <div className="row mb-4"><h4>Acompañamos la totalidad de cada vida</h4></div>
                        <div className="row"><p>Casa Munilla se ubica en el Barrio Munilla de nuestra ciudad. Entre los objetivos que persigue el centro barrial, como primera definición, es un espacio alojador, un dispositivo comunitario de acompañamiento para la vida, compuesto por un equipo de personas comprometidas. Se acompaña “la vida” y no sólo el problema de alguien con consumo problemático de sustancias. También se acercan las personas que están solas, huérfanas, desoladas, enfermas y, además, con la salud
                        comprometida por el consumo.</p></div>
                        <div className="row mb-3"><p>Esto significa abrazar la complejidad estableciendo necesariamente relaciones con otras instituciones de la ciudad o bien del país.
                        Son diversas las necesidades de las personas que asisten a “Asunción de María”, entendiéndose por ellas, alimentación, vivienda, salud física y mental, trabajo, educación, asistencia jurídica, etc. Para responder a ellas, se establecen vínculos con distintas organizaciones estatales o de la sociedad civil que ayudan a cubrir en mayor o menor medida las carencias de quienes se acompaña.
                        Lo central en la propuesta es el sentido de pertenencia a la comunidad-familia del Centro Barrial y el cuidado y acompañamiento hacia los otros que asume cada miembro que llega a nuestro dispositivo.
                        .</p></div>
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

export default CasaMunilla