import React from 'react';
import { BsFillEnvelopeFill } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";


const Contacto = () => {
    return (
        <>
            <h2 className="text-center text-title">CONTACTO</h2>
            <p className="text-center movil mb-4">Para contactarte con los diferentes dispositivos puedes escribirnos por email a las siguientes direcciones o seguirnos en las redes sociales:</p>
            <div className="container mt-3 d-flex flex-wrap justify-content-evenly">
                <div className="my-3 mx-1">
                    <div className="card-contactos text-center">
                        <h5 className="title-contactos">Centro Barrial Nazareth</h5>
                        <p className="text-contacto"><BsFillEnvelopeFill  className="contacto-icon" />hogarcristonazareth@gmail.com</p>
                        <p className="text-contacto"><BsFacebook className="contacto-icon" /><a href="facebook.com/hogardecristonazareth" rel="noreferrer" target="_blank">facebook.com/hogardecristonazareth</a></p>
                    </div>
                </div>
                <div className="my-3 mx-1">
                    <div className="card-contactos text-center">
                        <h5 className="title-contactos">Centro Barrial Asunción de Maria</h5>
                        <p className="text-contacto"><BsFillEnvelopeFill className="contacto-icon" />hcasunciondemaria@gmail.com</p>
                        <p className="text-contacto"><BsFacebook className="contacto-icon" />facebook.com/asunciondemaria</p>
                    </div>
                </div>
                <div className="my-3 mx-1">
                    <div className="card-contactos text-center">
                        <h5 className="title-contactos">Centro Barrial Corazón de Maria</h5>
                        <p className="text-contacto"><BsFillEnvelopeFill className="contacto-icon" />casacorazondemariagchu@gmail.com</p>
                        <p className="text-contacto"><BsFacebook className="contacto-icon" />facebook.com/corazondemaria</p>
                    </div>
                </div>
                <div className="my-3 mx-1">
                    <div className="card-contactos text-center">
                        <h5 className="title-contactos">EPI Jesus Niño</h5>
                        <p className="text-contacto"><BsFillEnvelopeFill  className="contacto-icon" />epijesusninio@hogardecristo.org.ar</p>
                        <p className="text-contacto"><BsFacebook className="contacto-icon" />facebook.com/epijesusninio</p>
                    </div>
                </div>
                <div className="my-3 mx-1">
                    <div className="card-contactos text-center">
                        <h5 className="title-contactos">Cooperativa Brota</h5>
                        <p className="text-contacto"><BsFillEnvelopeFill className="contacto-icon" />brota.gchu@hogardecristo.org.ar </p>
                        <p className="text-contacto"><BsFacebook className="contacto-icon" />facebook.com/brota</p>
                    </div>
                </div>
                <div className="my-3 mx-1">
                    <div className="card-contactos text-center">
                        <h5 className="title-contactos">Administración</h5>
                        <p className="text-contacto"><BsFillEnvelopeFill className="contacto-icon" />cooperativadetrabajoehc@gmail.com</p>
                        <p className="text-contacto"><BsFacebook className="contacto-icon" />facebook.com/cooperativadetrabajo</p>
                    </div>
                </div>
            </div>
            
        </>
    )
}

export default Contacto;