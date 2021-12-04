import React, { useState } from 'react';
import Button from "react-bootstrap/Button";

const Nosotros  = () => {
    const [show, setShow] = useState(true);
    return (
        <div className="container movil my-5">
            <div className="row text-center mt-5">
                <div className="col-12">
                    <div className="title mt-2 mb-4">
                        <h2>NOSOTROS</h2>
                    </div>
                    <div>
                        <p>Somos una comunidad que busca salir al encuentro, involucrarse y acompañar a personas con consumo problemático y a sus familiares. Recibimos sus vidas como vienen y caminamos junto a ellos, cuerpo a cuerpo. Buscamos brindar en primer lugar una contención humana, amorosa, que rompa con la soledad.</p>
                        <div>{!show && <p>Dicha contención luego se materializa en un acompañamiento integral. Un acompañamiento que, si bien incluye, no se acaba en aspectos psicológicos, médicos, educativos, laborales, sino que se ensancha para verlo TODO, también el tiempo, el cumpleaños, la enfermedad, los feriados, la cárcel, las dificultades con el dinero, etc.  Y es por ésto que la principal característica y fortaleza que nos define es el de SER FAMILIA.</p>}</div>
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
                </div>
            </div>
        </div>
    );
};

export default Nosotros;