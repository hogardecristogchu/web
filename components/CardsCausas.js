import React from 'react'


const CardsCausas = () => {
    return (
        <>
            <h2 className="text-center text-title">Nuestras principales causas</h2>
            <div className="container mt-3 d-flex flex-wrap justify-content-evenly">
                <div className="card my-3 mx-3">
                    <div className="card-body styles1" style={{ width: '20rem' }}>
                        <h5 className="card-title text-center">Consumo problemático</h5>
                        <div className="text-center">
                            <img src="/cards-icons/cp_b.png" className="card-img-top mt-3" alt="log" style={{ width: '7rem' }}/>
                        </div>
                        <p className="card-text text-center mt-3">Acompañamiento a personas y familias atravesadas por el consumo problemático de sustancias.</p>
                    </div>
                </div>
                <div className="card my-3 mx-3">
                    <div className="card-body styles2" style={{ width: '20rem' }}>
                        <h5 className="card-title text-center">Personas en situación de calle</h5>
                        <div className="text-center">
                            <img src="/cards-icons/sc_b.png" className="card-img-top mt-3" alt="log" style={{ width: '7rem' }}/>
                        </div>
                        <p className="card-text text-center mt-3">Alojamiento y contención de personas en situación de calle.</p>
                    </div>
                </div>
                <div className="card my-3 mx-3">
                    <div className="card-body styles3" style={{ width: '20rem' }}> 
                        <h5 className="card-title text-center">Reinserción educativa</h5>
                        <div className="text-center">
                            <img src="/cards-icons/re_b.png" className="card-img-top mt-3" alt="log" style={{ width: '5rem' }}/>
                        </div>
                        <p className="card-text text-center mt-3">Acompañamiento a personas en la culminación de sus estudios primarios o secundarios.</p>
                    </div>
                </div>
                <div className="card my-3 mx-3">
                    <div className="card-body styles1" style={{ width: '20rem' }}>
                        <h5 className="card-title text-center">Inclusión laboral</h5>
                        <div className="text-center">
                            <img src="/cards-icons/il_b.png" className="card-img-top mt-3" alt="log" style={{ width: '7rem' }}/>
                        </div>
                        <p className="card-text text-center mt-3">Inclusión en la cooperativa de trabajo propia del Hogar de Cristo.</p>
                    </div>
                </div>
                <div className="card my-3 mx-3">
                    <div className="card-body styles2" style={{ width: '20rem' }}>
                        <h5 className="card-title text-center">Empoderamiento femenino</h5>
                        <div className="text-center">
                            <img src="/cards-icons/ef_b.png" className="card-img-top mt-3" alt="log" style={{ width: '5rem' }}/>
                        </div>
                        <p className="card-text text-center mt-3">Empoderamiento de  mujeres que atraviesan situaciones de violencia.</p>
                    </div>
                </div>
                <div className="card my-3 mx-3">
                    <div className="card-body styles3" style={{ width: '20rem' }}>
                        <h5 className="card-title text-center">Infancias contenidas</h5>
                        <div className="text-center">
                            <img src="/cards-icons/ic_b.png" className="card-img-top mt-3" alt="log" style={{ width: '7rem' }}/>
                        </div>
                        <p className="card-text text-center mt-3">Protección de los derechos de los niños y contención de la infancia vulnerada.</p>
                    </div>
                </div>
                <div className="card my-3 mx-3">
                    <div className="card-body styles1" style={{ width: '20rem' }}>
                        <h5 className="card-title text-center">Revinculación familiar</h5>
                        <div className="text-center">
                            <img src="/cards-icons/rf_b.png" className="card-img-top mt-3" alt="log" style={{ width: '7rem' }}/>
                        </div>
                        <p className="card-text text-center mt-3">Restablecimiento de los vínculos entre padres/madres y sus hijos o en otros vínculos familiares (hermanos, tíos, y otros).</p>
                    </div>
                </div>
                <div className="card my-3 mx-3">
                    <div className="card-body styles2" style={{ width: '20rem' }}>
                        <h5 className="card-title text-center">Acompañamiento en contextos de encierro</h5>
                        <div className="text-center">
                            <img src="/cards-icons/pl_b.png" className="card-img-top mt-3" alt="log" style={{ width: '7rem' }}/>
                        </div>
                        <p className="card-text text-center mt-3">Acompañamiento a personas privadas de la libertad durante y después de la etapa de encierro.</p>
                    </div>
                </div>
                <div className="card my-3 mx-3">
                    <div className="card-body styles3" style={{ width: '20rem' }}>
                        <h5 className="card-title text-center">Cultura del encuentro</h5>
                        <div className="text-center">
                            <img src="/cards-icons/ce_b.png" className="card-img-top mt-3" alt="log" style={{ width: '7rem' }}/>
                        </div>
                        <p className="card-text text-center mt-3">Promoción del encuentro con otras personas y organizaciones a fin de enriquecer nuestro abordaje.</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CardsCausas;