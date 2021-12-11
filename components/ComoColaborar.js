import React from "react";
import ListGroup from 'react-bootstrap/ListGroup';
import { BsPeopleFill } from "react-icons/bs";
import { BsCartFill } from "react-icons/bs";
import { BsFillBriefcaseFill } from "react-icons/bs";
import { BsFillPrinterFill } from "react-icons/bs";
import { BsPiggyBankFill } from "react-icons/bs";
import Link from 'next/link';
const ComoColaborar = () => {
    return (
        <>
        <div className="div-movil container mt-3 mb-5">
            <div className="row">
                <div className="col-12">
                    <div className="line-dec-11"></div>
                    <h2 className="t-colabora">COLABORÁ CON NOSOTROS</h2>
                </div>
                <div className="col-12">
                    <p className="p-colabora mt-2 mb-4">Podés colaborar con el Hogar de Cristo Gualeguaychú de distintas formas:</p>
                    <ListGroup variant="flush">
                        <ListGroup.Item><BsPeopleFill className="icon-colabora" /><Link href="/voluntariado"><a className="a-negros">Siendo voluntario.</a></Link></ListGroup.Item>
                        <ListGroup.Item><BsFillBriefcaseFill className="icon-colabora" /><Link href="/contratar_brota"><a className="a-negros">Contratando los servicios de Brota.</a></Link></ListGroup.Item>
                        <ListGroup.Item><BsCartFill className="icon-colabora" /><Link href="/comprar_brota"><a className="a-negros">Comprando productos Brota.</a></Link></ListGroup.Item>
                        <ListGroup.Item><BsFillPrinterFill className="icon-colabora" /><Link className="a-negros" href="/voluntariado"><a className="a-negros">Colaborando con recursos materiales: muebles, electrodomésticos, utensilios de cocina, herramientas de trabajo, etc.</a></Link></ListGroup.Item>
                        <ListGroup.Item> <p className="p-important"><BsPiggyBankFill className="icon-colabora" />
                           Aportando mensualmente a la causa en este LINK: 
                            <a href="https://donaronline.org/hogar-de-cristo-gualeguaychu/ampliando-el-hogar-de-cristo-agrandando-el-abrazo?preview=true" className="b-movil" rel="noreferrer" target="_blank"><button className="btn boton-colabora">Realizar donación</button></a> </p>
                        </ListGroup.Item>
                    </ListGroup>
                    <p className="p-colabora mt-2 mb-4">Gracias a tu colaboración podremos seguir acompañando y abrazando la vida!</p>
                </div>
            </div>
        </div>
        </>
    )
}

export default ComoColaborar;
