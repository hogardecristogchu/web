import React from 'react';
import { BsLinkedin } from "react-icons/bs";
import { BsFillEnvelopeFill } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
import Nav from 'react-bootstrap/Nav';
import Link from 'next/link';
import { useRouter } from "next/router";

const FooterCompleto= () => {
    const router = useRouter();
    return (
        <>
        <div id="contacto" className="footer mt-5">
            <div className="container pt-5 pb-5">
                <div className="row">
                    <div className="md-footer col-12 col-md-6 col-lg-3">
                        <h5>Nuestra mision</h5>
                        <p>Acompañar a personas con consumo problemático de sustancias en su camino de desarrollo integral y automía.</p>
                    </div>
                    <div className="md-none col-12 col-md-6 col-lg-3 pl-2">
                        <h5>Enlaces Rápidos</h5>
                        <Nav defaultActiveKey="/" className="flex-column">
                            <Nav.Link onClick={() => router.push("/")} eventKey="link-0">Inicio</Nav.Link>
                            <Nav.Link onClick={() => router.push("/quienes_somos")} eventKey="link-1">¿Quiénes somos?</Nav.Link>
                            <Nav.Link onClick={() => router.push("/dispositivos")} eventKey="link-2">Dispositivos</Nav.Link>
                            <Nav.Link onClick={() => router.push("/como_colaborar")} eventKey="link-3">Cómo colaborar</Nav.Link>
                            <Nav.Link onClick={() => router.push("/novedades")} eventKey="link-4">Novedades</Nav.Link>
                            <Nav.Link eventKey="link-5" target="_blank" href="https://donaronline.org/hogar-de-cristo-gualeguaychu/ampliando-el-hogar-de-cristo-agrandando-el-abrazo?preview=true">Donar Online</Nav.Link>
                        </Nav>
                    </div>
                     <div className="md-none col-md-6 col-lg-3">
                        <h5>Galeria</h5>
                        <Nav.Link onClick={() => router.push("/galeria")} className='a-galeria' eventKey="link-2"><img src="/footer/PQ-Brota.png" className="img-galeria" alt="log" /></Nav.Link>
                        <Nav.Link onClick={() => router.push("/galeria")} className='a-galeria' eventKey="link-2"><img src="/footer/PQ-Nazareth.png" className="img-galeria" alt="log" /></Nav.Link>
                        <Nav.Link onClick={() => router.push("/galeria")} className='a-galeria' eventKey="link-2"><img src="/footer/PQ-Corazondemaria.png" className="img-galeria" alt="log" /></Nav.Link>
                        <Nav.Link onClick={() => router.push("/galeria")} className='a-galeria' eventKey="link-2"><img src="/footer/PQ-Epi.png" className="img-galeria" alt="log" /></Nav.Link>
                    </div>
                    <div className="md-contacto col-12 col-md-6 col-lg-3 pl-2">
                        <h5>Contacto</h5>
                        <p><BsInstagram className="footer-icon" /><span>Instagram</span></p>
                        <p className="p-correos"><a className="a-correos" href="https://www.instagram.com/hogardecristogchu/" rel="noreferrer" target="_blank">instagram.com/hogardecristogchu</a></p>
                        <p><BsFacebook className="footer-icon" /><span>Facebook</span></p>
                        <p className="p-correos"><a className="a-correos" href="https://www.facebook.com/hogardecristogchu" rel="noreferrer" target="_blank">facebook.com/hogardecristogchu</a></p>
                        <p><BsFillEnvelopeFill className="footer-icon" /><span>Correo Electronico</span></p>
                        <p className="p-correos">comunicaciongchu@hogardecristo.org.ar</p>
                    </div>
                </div>
            </div>
        </div>
        <div className='programadoras'>
            <div className="container pt-3 pb-1">
                <div className="row">
                    <div className="md-contacto col-12 col-md-4">
                        <p className="p-correos"><BsLinkedin className="programadoras-icon" /><Link href="https://www.linkedin.com/in/raquel-muriega-9479491a9/?_l=es_ES"><a className="a-blanco pro-a" target="_blank">Raquel Muriega</a></Link></p>
                    </div>
                    <div className="md-contacto col-12 col-md-4">
                        <p className="p-correos"><BsLinkedin className="programadoras-icon" /><Link href="https://www.linkedin.com/in/falbericipavon/"><a className="a-blanco pro-a" target="_blank">Fernanda Alberici</a></Link></p>
                    </div>
                    <div className="md-contacto col-12 col-md-4">
                        <p className="p-correos"><BsLinkedin className="programadoras-icon" /><Link href="https://www.linkedin.com/in/lourdes-luna-web/"><a className="a-blanco pro-a" target="_blank">Lourdes Luna</a></Link></p>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default FooterCompleto;