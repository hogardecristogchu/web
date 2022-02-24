import React, { useState, useEffect } from "react";
import { Button, Row, Col, Form } from "react-bootstrap";
import VoluntariadoIndividual from "./VoluntariadoIndividual";
import emailjs from "emailjs-com";
import Swal from "sweetalert2";

const ColaborarVoluntariado = () => {
  useEffect(() => {
    emailjs.init("user_bSP8bvE5FeDtxTWKZWNG6");
  }, []);

  const [isFormDisabled, setIsFormDisabled] = useState(true);

  const [stateIndividual, setStateIndividual] = useState({
    name: "",
    edad: "",
    celular: "",
    email: "",
    habilidades: "",
  });

  useEffect(() => {
    validationForm();
  }, [stateIndividual]);

  const handleChangeIndividual = (e) => {
    const { name, value } = e.target;
    setStateIndividual((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const validationForm = () => {
    let isValid = true;
    if (stateIndividual.name.length === 0) {
      isValid = false;
    }
    if (stateIndividual.edad.length === 0) {
      isValid = false;
    }
    if (stateIndividual.celular.length === 0) {
      isValid = false;
    }
    if (stateIndividual.email.length === 0) {
      isValid = false;
    }
    if (stateIndividual.name.length === 0) {
      isValid = false;
    }
    if (stateIndividual.habilidades.length === 0) {
      isValid = false;
    }

    setIsFormDisabled(!isValid);
  }

  const onClick = (e) => {
    //Envía mail con la información de ambos estados
    //stateIndividual
    //stateGrupal
    e.preventDefault();

    let templateParamsIndividual = {
      name: `${stateIndividual.name}`,
      edad: `${stateIndividual.edad}`,
      celular: `${stateIndividual.celular}`,
      email: `${stateIndividual.email}`,
      habilidades: `${stateIndividual.habilidades}`,
    };

    let isValid = true;
    if (stateIndividual.name.length < 1) {
      isValid = false;
    }
    if (stateIndividual.edad.length < 1) {
      isValid = false;
    }
    if (stateIndividual.celular.length < 1) {
      isValid = false;
    }
    if (stateIndividual.email.length < 1) {
      isValid = false;
    }
    if (stateIndividual.name.length < 1) {
      isValid = false;
    }
    if (stateIndividual.habilidades.length < 1) {
      isValid = false;
    }

    if(!isValid){
      return;
    }

    emailjs
      .send("service_agvw6tb", "template_o4tmp1j", templateParamsIndividual)
      .then(
        function (response) {
          console.log("SUCCESS!", response.status, response.text);
          Swal.fire({
            title: "Excelente!",
            text: "Gracias por tu mensaje. Pronto estaremos contactándote",
            icon: "success",
          }).then((result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {
              //Borrar inputs
              setStateIndividual({
                name: "",
                edad: "",
                celular: "",
                email: "",
                habilidades: "",
              });
            }
          });
        },
        function (err) {
          console.log("FAILED...", err);
        }
      );
  };

  return (
    <div>
      <div className="container movil my-5" id="miForm">
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
            <Button className="boton-slider" onClick={onClick} disabled={isFormDisabled}>
              ENVIAR
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ColaborarVoluntariado;
