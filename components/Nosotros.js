import React, { useState } from 'react';
import Maps from "../components/Maps";

const Nosotros = () => {
    const [show, setShow] = useState(true);
    return (
        <>
            <div className="title"><h2 className="text-center">NOSOTROS</h2></div>
            <div className="container text-center">
                <p className="p-dispositivos mt-3">Somos una comunidad que busca salir al encuentro, involucrarse y acompañar a personas con consumo problemático y a sus familiares. Recibimos sus vidas como vienen y caminamos junto a ellos, cuerpo a cuerpo. </p>
                <div>{!show && <p className="p-dispositivos">Buscamos brindar en primer lugar una contención humana, amorosa, que rompa con la soledad. Dicha contención luego se materializa en un acompañamiento integral. Un acompañamiento que, si bien incluye, no se acaba en aspectos psicológicos, médicos, educativos, laborales, sino que se ensancha para verlo TODO, también el tiempo, el cumpleaños, la enfermedad, los feriados, la cárcel, las dificultades con el dinero, etc.  Y es por ésto que la principal característica y fortaleza que nos define es el de SER FAMILIA.</p>}</div>
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
        </>)
}

export default Nosotros