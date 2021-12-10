import React, { useState } from 'react';
import Maps from "../components/Maps";

const Dispositivos = () => {
    const [show, setShow] = useState(true);
    const [mostrar, setMostrar] = useState(true);
    return (
        <>
            <div className="title"><h2 className="text-center"> Dispositivos</h2></div>
            <div className="container text-center">
                <h3 className="mt-3">Centros Barriales</h3>
                <p className="p-dispositivos mt-3">El centro barrial es un espacio alojador, un dispositivo comunitario de acompañamiento para la vida que recibe a personas en contextos de exclusión social.
                El mismo funciona durante el día y ofrece una variedad de espacios que incluyen: talleres de oficios, espacios de escucha individuales, espacios terapéuticos grupales, espacios de espiritualidad, entre otros. </p>
                <div>{!show && <p className="p-dispositivos">Además de las actividades, el centro barrial o centro de día también cuenta con las instalaciones necesarias para que las personas puedan transcurrir el día alejados del consumo. Instalaciones, como ser baños, cocina, comedor o espacio de juegos (ping pong, metegol, televisión, etc),  que están disponibles para el uso comunitario.Los centros barriales permiten acompañar a las personas, atravesadas por el consumo problemático de sustancias, en su proceso de revinculación familiar y social, en la incorporación de hábitos saludables y en un camino hacia la autonomía.</p>}</div>
                <button
                    className="btn btn-dispositivos"
                    type="button"
                    onClick={() => {
                    setShow(!show);
                    }}
                    >
                    {show ? "LEER MÁS" : "LEER MENOS"}
                </button>
                <button
                className="btn btn-ubicaciones"
                type="button"
                onClick={() => {
                  setMostrar(!mostrar);
                }}
              >
                {mostrar? "VER UBICACIÓN" : "OCULTAR UBICACIÓN"}
              </button>
              <div>{!mostrar && <Maps />}</div>
            </div>
        </>)
}

export default Dispositivos
