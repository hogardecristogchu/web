import React from 'react'

const Voluntariado = () => {
    return (
        <>
            <div className="container movil my-5">
                <div className="row">
                    <div className="col-12 col-md-6">
                        <img src="https://www.lapalabraisraelita.cl/backend/views/img/articulos/fe1f6c31eb77b.jpg" className="img-fluid" alt="voluntarios" />
                    </div>
                    <div className="col-12 col-md-6">
                        <div className="row title"><h2>Voluntariado</h2></div>
                        <div className="row"><h4>La familia sigue creciendo</h4></div>
                        <div className="row mt-3"><h6>Somos un equipo sin fines de lucro y trabajamos en todo el mundo.</h6></div>
                        <div className="row mb-3"><p>Formar parte de la familia del Hogar de Cristo siendo voluntario es una experiencia sumamente enriquecedora. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p></div>
                        <button className="btn boton-slider">SUMATE A ESTA GRAN FAMILIA</button>
                    </div>
                </div>
            </div>
            <div className="container my-5">
                <div className="row title"><h2>Testimonios</h2></div>
                <div className="row mt-1">
                    <div className="card">
                        <div className="card-body">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        <p>Marcelo, 28 años</p>
                        </div>
                    </div>
                </div>
                <div className="row mt-1">
                    <div className="card">
                        <div className="card-body">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        <p>Juana, 53 años</p>
                        </div>
                    </div>
                </div>
                <div className="row mt-1">
                    <div className="card">
                        <div className="card-body">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        <p>Mariana, 23 años</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Voluntariado