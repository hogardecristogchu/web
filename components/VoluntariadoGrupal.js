import React from "react";
import Form from "react-bootstrap/Form";

const VoluntariadoGrupal = () => {
  return (
    <Form>
      <h4>Voluntariado Grupal</h4>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Nombre del grupo/curso y colegio:</Form.Label>
        <Form.Control type="name" placeholder="Nombre" />
        <Form.Label>Edades aprox (mayor de 16 años):</Form.Label>
        <Form.Control type="age" placeholder="Edades" />
        <Form.Label>Ciudad</Form.Label>
        <Form.Control type="city" placeholder="Ciudad" />
        <Form.Label>Provincia</Form.Label>
        <Form.Control type="place" placeholder="Provincia" />
        <Form.Label> Celular de coordinador/a o referente:</Form.Label>
        <Form.Control type="phone" placeholder="Celular" />
        <Form.Label>
          {" "}
          Contanos que te motivó para ser voluntario en el Hogar de Cristo:{" "}
        </Form.Label>
        <Form.Control type="text" placeholder="contanos..." />
        <Form.Label>
          ¿Qué podes ofrecernos? (tiempo, profesión, habilidad, escucha, etc.):{" "}
        </Form.Label>
        <Form.Control type="text" placeholder="contanos..." />
      </Form.Group>
    </Form>
  );
};

export default VoluntariadoGrupal;
