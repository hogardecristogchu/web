import React from "react";
import { Button, Row, Col } from "react-bootstrap";
import VoluntariadoIndividual from "./VoluntariadoIndividual";
import VoluntariadoGrupal from "./VoluntariadoGrupal";

const ColaborarVoluntariado = () => {
  return (
    <div>
      
      <div className="container my-5">
      <h2 className="text-center">Voluntario/a</h2>
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
            <VoluntariadoIndividual />
          </Col>
          <Col>
            <VoluntariadoGrupal />
          </Col>
          <div>
            <Button className="boton-slider">ENVIAR</Button>
          </div>
        </Row>
      </div>
      
    </div>
  );
};

export default ColaborarVoluntariado;
