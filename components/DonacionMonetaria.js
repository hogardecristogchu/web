import React from 'react'

const DonacionMonetaria = () => {
    return (
        <>
            
            <a href="https://donaronline.org/hogar-de-cristo-gualeguaychu/ampliando-el-hogar-de-cristo-agrandando-el-abrazo?preview=true" className="" rel="noreferrer" target="_blank" style={{ color: 'black' }}>
            <h4 className="text-center">Donación Monetaria</h4>
                <div className="container">
                <h2>Datos Personales</h2>
                <div className="row">
                    <div className="mb-3 col-sm-4">
                        <label htmlFor="name" className="form-label">Nombre/s</label>
                        <input type="text" className="form-control" id="name" />
                    </div>
                    <div className="mb-3 col-sm-4">
                        <label htmlFor="surname" className="form-label">Apellido/s</label>
                        <input type="text" className="form-control" id="surname" />
                    </div>
                    <div className="mb-3 col-sm-4">
                        <label htmlFor="email" className="form-label">Email</label>
                        <input type="email" className="form-control" id="email" />
                    </div>
                </div>
                <div className="row">
                    <div className="mb-3 col-sm-6">
                        <label htmlFor="adress" className="form-label">Dirección</label>
                        <input type="text" className="form-control" id="adress" />
                    </div>
                    <div className="mb-3 col-sm-6">
                        <label htmlFor="city" className="form-label">Ciudad</label>
                        <input type="text" className="form-control" id="city" />
                    </div>
                </div>
                <div className="row">
                    <div className="mb-3 col-sm-4">
                        <label htmlFor="cp" className="form-label">Código Postal</label>
                        <input type="text" className="form-control" id="cp" />
                    </div>
                    <div className="mb-3 col-sm-4">
                        <label htmlFor="prov" className="form-label">Provincia</label>
                        <input type="text" className="form-control" id="prov" />
                    </div>
                    <div className="mb-3 col-sm-4">
                        <label htmlFor="country" className="form-label">País</label>
                        <input type="text" className="form-control" id="country" />
                    </div>
                </div>
                <div className="row">
                    <div className="mb-3 col-sm-6">
                        <label htmlFor="phone" className="form-label">Teléfono</label>
                        <input type="text" className="form-control" id="phone" />
                    </div>
                    <div className="mb-3 col-sm-6">
                        <label htmlFor="cel" className="form-label">Teléfono Móvil</label>
                        <input type="text" className="form-control" id="cel" />
                    </div>
                </div>
                <div className="row">
                    <div className="mb-3 col-sm-6">
                        <label htmlFor="birth" className="form-label">Fecha de nacimiento</label>
                        <input type="date" className="form-control" id="birth" />
                    </div>
                </div>
            </div></a>
        </>)
}

export default DonacionMonetaria