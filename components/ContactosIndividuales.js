import React from 'react';
import { BsFillEnvelopeFill } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";

const ContactosIndividuales= ({titulo, mail, linkRedes, facebook}) => {
    return (
        <div className="container mt-2 mb-5">
            <div className="row title">
                <h2 className="text-center pb-3">Contacto</h2>
            </div>
            <div className="movil-card card-contactos text-center">
                    <h5 className="title-contactos">{titulo}</h5>
                    <p className="text-contacto"><BsFillEnvelopeFill  className="contacto-icon" />{mail}</p>
                    <p className="text-contacto"><BsFacebook className="contacto-icon" /><a href={linkRedes} rel="noreferrer" className="contacto-a" target="_blank">{facebook}</a></p>
            </div>
        </div>
    )
}

export default ContactosIndividuales;