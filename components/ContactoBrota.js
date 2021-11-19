import React from 'react';
import Card from 'react-bootstrap/Card';
import { BsFillTelephoneFill } from "react-icons/bs";
import { BsFillEnvelopeFill } from "react-icons/bs";
import { BsChatDotsFill} from "react-icons/bs";

const ContactoBrota= ({titulo}) => {
    return (
        <div className="container mt-2 mb-5">
            <Card className="card-contacto">
                <Card.Header className="text-center" as="h4">{titulo}</Card.Header>
                <Card.Body>
                    <Card.Text><BsFillEnvelopeFill className="card-icon" /> Escribinos al siguiente mail: </Card.Text>
                    <Card.Text><BsFillTelephoneFill className="card-icon" /> Comunicate con nosotros al siguiente celular: </Card.Text>
                    <Card.Text><BsChatDotsFill className="card-icon" /> O por Whatsapp al siguiente celular: </Card.Text>
                </Card.Body>
            </Card>
        </div>
    )
}

export default ContactoBrota;