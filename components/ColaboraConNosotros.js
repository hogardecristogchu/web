import React from 'react';
import { BsPeopleFill } from "react-icons/bs";
import { BsCartFill } from "react-icons/bs";
import { BsFillBriefcaseFill } from "react-icons/bs";
import { BsFillPrinterFill } from "react-icons/bs";
import { BsPiggyBankFill } from "react-icons/bs";

const ColaboraConNosotros = () => {
    return (
        <div className="div-movil">
            <h2 className="text-center text-title">COLABORA CON NOSOTROS</h2>
            <p className="text-center movil mb-2">Podés colaborar con el Hogar de Cristo Gualeguaychú de distintas formas:</p>
            <div className="container">
                <div  className="row mt-4">
                    <div className="col-12 col-md-4 mb-4">
                        <div className="card-colabora text-center">
                            <BsPeopleFill className="icon-colabora"></BsPeopleFill>
                            <p className="text-colabora">Siendo voluntario</p>
                        </div>
                    </div>
                    <div className="col-12 col-md-4 mb-4">
                        <div className="card-colabora text-center">
                            <BsFillBriefcaseFill className="icon-colabora"></BsFillBriefcaseFill>
                            <p className="text-colabora">Contratando los servicios de Brota</p>
                        </div>
                    </div>
                    <div className="col-12 col-md-4 mb-4">
                        <div className="card-colabora text-center">
                            <BsCartFill className="icon-colabora"></BsCartFill>
                            <p className="text-colabora">Comprando productos Brota</p>
                        </div>
                    </div>
                </div>
                <div  className="row mt-2">
                    <div className="col-12 col-md-6 mb-4">
                        <div className="card-colaborar text-center">
                            <BsFillPrinterFill className="icon-colabora"></BsFillPrinterFill>
                            <p className="text-colabora">Colaborando con recursos materiales: </p>
                            <p className="text-colabora">Muebles, electrodomésticos, utensilios de cocina, herramientas de trabajo, etc.</p>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 mb-4">
                        <div className="card-colaborar text-center">
                            <BsPiggyBankFill className="icon-colabora"></BsPiggyBankFill>
                            <p className="text-colabora">Aportando mensualmente a la causa por medio de este link</p>
                            <a href="https://donaronline.org/hogar-de-cristo-gualeguaychu/ampliando-el-hogar-de-cristo-agrandando-el-abrazo?preview=true" className="" rel="noreferrer" target="_blank"><button className="btn boton-slider mt-1">Realizar donación</button></a>
                        </div>
                    </div>

                </div>
            </div>
            
        </div>
    )
}

export default ColaboraConNosotros;