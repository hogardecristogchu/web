import React from 'react';
import Link from 'next/link';

const Voluntariado = () => {
    return (
        <>
            <div className="container movil my-5">
                <div className="row">
                    <div className="col-12 col-md-6">
                        <img src="/dispositivos/VOLUNTARIOS.jpg" className="img-fluid" alt="voluntarios" />
                    </div>
                    <div className="col-12 col-md-6 mb-5">
                        <div className="line-dec"></div>
                        <div className="title"><h2>Voluntariado</h2></div>
                        <div><h5 className="sub-vol mb-4">Somos un equipo que acompaña la vida en todas sus dimensiones.</h5></div>
                        <div className="mt-3"><p>Formar parte de la familia del Hogar de Cristo siendo voluntario se trata simplemente de darse como persona y ofrecer tiempo para acompañar vidas y para eso no hace falta ningún conocimiento técnico ni habilidad especial.</p></div>
                        <div className="mb-4"><p>Ser parte del Hogar de Cristo es ser parte de una familia que comparte la hermosa y desafiante tarea de contener y acompañar de forma personalizada.</p></div>
                        <button className="btn boton-slider"><Link className="a-blancos" href="/voluntariado"><a>SUMATE A ESTA GRAN FAMILIA</a></Link></button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Voluntariado