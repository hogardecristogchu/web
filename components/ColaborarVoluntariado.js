import React, { useState, useEffect } from "react";
import { Button, Row, Col, Form } from "react-bootstrap";
import VoluntariadoIndividual from "./VoluntariadoIndividual";
import emailjs from "emailjs-com";

const ColaborarVoluntariado = () => {
  useEffect(() => {
    emailjs.init("user_bSP8bvE5FeDtxTWKZWNG6");
  }, []);

  const [state, setState] = useState({ selectedOption: "" });

  const [stateIndividual, setStateIndividual] = useState({
    name: "",
    edad: "",
    city: "",
    provincia: "",
    celular: "",
    email: "",
    motivo: "",
    habilidades: "",
  });

  const handleChangeIndividual = (e) => {
    const { name, value } = e.target;
    setStateIndividual((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };


  const onClick = (e) => {
    //Envía mail con la información de ambos estados
    //stateIndividual
    //stateGrupal
    e.preventDefault();

    let templateParamsIndividual = {
      name: `${stateIndividual.name}`,
      edad: `${stateIndividual.edad}`,
      city: `${stateIndividual.city}`,
      provincia: `${stateIndividual.provincia}`,
      celular: `${stateIndividual.celular}`,
      email: `${stateIndividual.email}`,
      motivo: `${stateIndividual.motivo}`,
      habilidades: `${stateIndividual.habilidades}`,
    };

    emailjs
      .send("service_agvw6tb", "template_o4tmp1j", templateParamsIndividual)
      .then(
        function (response) {
          console.log("SUCCESS!", response.status, response.text);
        },
        function (err) {
          console.log("FAILED...", err);
        }
      );
  };

  return (
    <div>
      <div className="p-movil container movil my-5">
        <h2 className="text-center">Voluntariado</h2>
        <p>
          Escribinos indicando qué tipo de voluntariado queres hacer: desde tu
          profesión, cuerpo a cuerpo o para alguna situación puntual (por
          ejemplo: eventos).
        </p>
        <div className="row pt-5 pb-4">
          <div className="col-12 col-md-6">
            {
              <img
                src={"/dispositivos/VOLUNTARIADO.jpeg"}
                className="img-thumbnail-center "
                alt="voluntarios"
              />
            }
          </div>
          <div className="col-12 col-md-6">
            <VoluntariadoIndividual
              state={stateIndividual}
              handleChange={handleChangeIndividual}
                
            />
            <Button
              className="boton-slider"
              onClick={onClick}
            >
            ENVIAR
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ColaborarVoluntariado;
