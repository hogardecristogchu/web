import React from 'react';
import Button from 'react-bootstrap/Button';
import MapEpi from './MapEpi';

const BrotaServicios = () => {
    return (
        <>
            <div className="container my-5">
                <div className="row mt-5">
                    <div className="col-12 col-md-6">
                        <img src="/dispositivos/Brota-Servicios.jpg" className="mt-2 img-fluid" alt="voluntarios" />
                        <MapEpi />
                    </div>
                    <div className="col-12 col-md-6">
                        <div className="row title mt-4"><h2>BROTA SERVICIOS</h2></div>
                        <div className="row mb-4"><h4>Loren ipsum</h4></div>
                        <div className="row"><p>Brota es la marca comercial de los productos y servicios que se ofrecen desde el Hogar hacia la comunidad. Brota nació en marzo del año 2019
                        </p></div>
                        <div className="row"><p>El nombre hace referencia a la posibilidad que tiene cada persona, de volver a nacer y transformarse en nueva vida para otros.</p></div> 
                        <div className="row"><p>Brota “servicios” ofrece principalmente servicios de jardinería y mantenimiento de parques, construcción y albañilería, e impermeabilización y pintura.</p></div>
                        <div className="row"><p>Las personas que conforman la cooperativa trabajan con seguro propio y coordinados por un maestro mayo de obra.
                        </p></div>
                        <Button className="boton-slider">PARA CONTRATARNOS</Button>
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

export default BrotaServicios