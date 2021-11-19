import React, { useState, useEffect } from "react";
import { Button, Row, Col, Form } from "react-bootstrap";
import VoluntariadoIndividual from "./VoluntariadoIndividual";
import VoluntariadoGrupal from "./VoluntariadoGrupal";
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

  const [stateGrupal, setStateGrupal] = useState({
    name: "",
    edad: "",
    city: "",
    provincia: "",
    celular: "",
    motivo: "",
    habilidades: "",
  });

  const handleChangeGrupal = (e) => {
    const { name, value } = e.target;
    setStateGrupal((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const onValueChange = (event) => {
    setState({
      selectedOption: event.target.value,
    });
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

    let templateParamsGrupal = {
      name: `${stateGrupal.name}`,
      edad: `${stateGrupal.edad}`,
      city: `${stateGrupal.city}`,
      provincia: `${stateGrupal.provincia}`,
      celular: `${stateGrupal.celular}`,
      motivo: `${stateGrupal.motivo}`,
      habilidades: `${stateGrupal.habilidades}`,
    };

    emailjs
      .send(
        "service_agvw6tb",
        state.selectedOption !== "Individual"
          ? "template_nw91ofh"
          : "template_o4tmp1j",
        state.selectedOption !== "Individual"
          ? templateParamsGrupal
          : templateParamsIndividual
      )
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
      <div className="container my-5">
        <h2 className="text-center">Voluntario/a</h2>
        <h5>
          Escribinos indicando qué tipo de voluntariado queres hacer: desde tu
          profesión, cuerpo a cuerpo o para alguna situación puntual (por
          ejemplo: eventos).
        </h5>
        <div className="col-12 col-md-6">
          {
            <img
              src={"/dispositivos/VOLUNTARIADO.jpeg"}
              className="img-thumbnail-center "
              alt="voluntarios"
            />
          }
        </div>
        <Row>
          <Col>
            <Form.Check
              type="radio"
              name="group1"
              value="Individual"
              id="chkIndividual"
              checked={state.selectedOption === "Individual"}
              onChange={onValueChange}
            />
            <VoluntariadoIndividual
              state={stateIndividual}
              handleChange={handleChangeIndividual}
              disabled={state.selectedOption !== "Individual"}
            />
          </Col>
          <Col>
            <Form.Check
              type="radio"
              name="group1"
              value="Grupal"
              id="chkGrupal"
              checked={state.selectedOption === "Grupal"}
              onChange={onValueChange}
            />
            <VoluntariadoGrupal
              state={stateGrupal}
              handleChange={handleChangeGrupal}
              disabled={state.selectedOption !== "Grupal"}
            />
          </Col>
          <div>
            <Button className="boton-slider" onClick={onClick} disabled={state.selectedOption === ''}>
              ENVIAR
            </Button>
          </div>
        </Row>
      </div>
    </div>
  );
};

export default ColaborarVoluntariado;
