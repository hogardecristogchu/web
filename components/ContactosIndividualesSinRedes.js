import React from 'react';
import { BsFillEnvelopeFill } from "react-icons/bs";

const ContactosIndividualesSinRedes= ({titulo, mail}) => {
    return (
        <div className="container mt-2 mb-5">
            <div className="row title">
                <h2 className="text-center pb-3">Contacto</h2>
            </div>
            <div className="card-contactos text-center">
                    <h5 className="title-contactos">{titulo}</h5>
                    <p className="text-contacto"><BsFillEnvelopeFill  className="contacto-icon" />{mail}</p>
            </div>
        </div>
    )
}

export default ContactosIndividualesSinRedes;