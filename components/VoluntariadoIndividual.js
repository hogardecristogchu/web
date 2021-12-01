import React, { useState } from "react";
import Form from "react-bootstrap/Form";

const VoluntariadoIndividual = ({state, handleChange, disabled}) => {


  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
      <div className="row pb-3">
        <div className="col-12 col-sm-6">
        <Form.Label>Nombre y Apellido</Form.Label>
        <Form.Control
          value={state.name}
          type="name"
          onChange={handleChange}
          name="name"
          placeholder="Nombre y Apellido"
          disabled={disabled}
        />
        </div>
        <div className="col-12 col-sm-6">
        <Form.Label>Edad ( Mayor de 18 años.)</Form.Label>
        <Form.Control
          value={state.edad}
          onChange={handleChange}
          name="edad"
          type="age"
          placeholder="Edad"
          disabled={disabled}
        />
        </div>
      </div>
      <div className="row pb-3">
        <div className="col-12 col-sm-6">
          <Form.Label>Celular</Form.Label>
          <Form.Control
            value={state.celular}
            onChange={handleChange}
            name="celular"
            type="phone"
            placeholder="Celular"
            disabled={disabled}
          />
        </div>
        <div className="col-12 col-sm-6">
          <Form.Label>Email </Form.Label>
          <Form.Control
            value={state.email}
            onChange={handleChange}
            name="email"
            type="email"
            placeholder="Email"
            disabled={disabled}
          />
        </div>
      </div>
        <Form.Label>
          ¿Qué podes ofrecernos? (tiempo, profesión, habilidad, escucha, etc.):{" "}
        </Form.Label>
        <Form.Control
          value={state.habilidades}
          onChange={handleChange}
          name="habilidades"
          type="text"
          placeholder="Contanos..."
          disabled={disabled}
        />
      </Form.Group>
    </Form>
  );
};

export default VoluntariadoIndividual;
