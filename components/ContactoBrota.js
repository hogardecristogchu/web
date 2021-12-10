import React from 'react';
import Card from 'react-bootstrap/Card';
import { BsFillTelephoneFill } from "react-icons/bs";
import { BsFillEnvelopeFill } from "react-icons/bs";
import { BsFacebook} from "react-icons/bs";

const ContactoBrota= ({titulo, mail, telefono, linkRedes, facebook}) => {
    return (
        <div className="container mt-2">
            <Card className="card-contacto mb-6">
                <Card.Header className="text-center h4-titulo" as="h4">{titulo}</Card.Header>
                <Card.Body>
                    <Card.Text  className="text-center"><BsFillEnvelopeFill className="card-icon" /> Escribinos al siguiente mail: {mail} </Card.Text>
                    <Card.Text  className="text-center"><BsFillTelephoneFill className="card-icon" /> Comunicate con nosotros al siguiente celular: {telefono}</Card.Text>
                    <Card.Text  className="text-center"><BsFacebook className="card-icon" /><a href={linkRedes} rel="noreferrer" className="contacto-a" target="_blank">{facebook}</a></Card.Text>
                </Card.Body>
            </Card>
        </div>
    )
}

export default ContactoBrota;