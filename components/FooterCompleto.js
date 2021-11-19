import React from 'react';
import { BsFillTelephoneFill } from "react-icons/bs";
import { BsFillEnvelopeFill } from "react-icons/bs";
import { BsChatDotsFill} from "react-icons/bs";
import Nav from 'react-bootstrap/Nav';

const FooterCompleto= () => {
    return (
        <div className="footer mt-5">
            <div className="container pt-5 pb-5">
                <div className="row">
                    <div className="md-footer col-md-6 col-lg-3">
                        <h5>Nuestra mision</h5>
                        <p>Lo central en la propuesta es el sentido de pertenencia a la comunidad-familia del Centro Barrial y el cuidado y acompañamiento hacia los otros que asume cada miembro que llega a nuestro dispositivo.</p>
                    </div>
                    <div className="md-none col-md-6 col-lg-3 pl-2">
                        <h5>Enlaces Rápidos</h5>
                        <Nav defaultActiveKey="/home" className="flex-column">
                            <Nav.Link eventKey="link-0">Inicio</Nav.Link>
                            <Nav.Link eventKey="link-1">¿Quiénes somos?</Nav.Link>
                            <Nav.Link eventKey="link-2">Dispositivos</Nav.Link>
                            <Nav.Link eventKey="link-3">Cómo colaborar</Nav.Link>
                            <Nav.Link eventKey="link-4">Blog</Nav.Link>
                            <Nav.Link eventKey="link-5">Contacto</Nav.Link>
                        </Nav>
                    </div>
                    <div className="md-none col-md-6 col-lg-3">
                        <h5>Galeria</h5>
                        <img src="/footer/PQ-Brota.png" className="img-galeria" alt="log" />
                        <img src="/footer/PQ-CasaMunilla.png" className="img-galeria" alt="log" />
                        <img src="/footer/PQ-Corazondemaria.png" className="img-galeria" alt="log" />
                        <img src="/footer/PQ-Epi.png" className="img-galeria" alt="log" />
                    </div>
                    <div className="md-contacto col-md-6 col-lg-3 pl-2">
                        <h5>Contacto</h5>
                        <p><BsFillTelephoneFill className="footer-icon" /><span>Numero de Telefono</span></p>
                        <p className="ml-2">011 4560 7860</p>
                        <p><BsChatDotsFill className="footer-icon" /><span>Whatsapp</span></p>
                        <p className="ml-2">011 6699 7860</p>
                        <p><BsFillEnvelopeFill className="footer-icon" /><span>Correo Electronico</span></p>
                        <p className="ml-2">info@emailexample.com</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FooterCompleto;