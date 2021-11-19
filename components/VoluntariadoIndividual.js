import React, { useState } from "react";
import Form from "react-bootstrap/Form";

const VoluntariadoIndividual = ({state, handleChange, disabled}) => {


  return (
    <Form>
      <h4>Voluntariado individual</h4>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Nombre y Apellido</Form.Label>
        <Form.Control
          value={state.name}
          type="name"
          onChange={handleChange}
          name="name"
          placeholder="Nombre y Apellido"
          disabled={disabled}
        />
        <br/>
        <Form.Label>Edad</Form.Label>
        <Form.Control
          value={state.edad}
          onChange={handleChange}
          name="edad"
          type="age"
          placeholder="Edad"
          disabled={disabled}
        />
        <Form.Text className="text-muted"> Mayor de 16 años.</Form.Text>
        <br />
        <Form.Label>Ciudad</Form.Label>
        <Form.Control
          value={state.city}
          onChange={handleChange}
          name="city"
          type="city"
          placeholder="Ciudad"
          disabled={disabled}
        />
        <br/>
        <Form.Label>Provincia</Form.Label>
        <Form.Control
          value={state.provincia}
          onChange={handleChange}
          name="provincia"
          type="place"
          placeholder="Provincia"
          disabled={disabled}
        />
        <br/>
        <Form.Label>Celular</Form.Label>
        <Form.Control
          value={state.celular}
          onChange={handleChange}
          name="celular"
          type="phone"
          placeholder="Celular"
          disabled={disabled}
        />
        <br/>
        <Form.Label>Email </Form.Label>
        <Form.Control
          value={state.email}
          onChange={handleChange}
          name="email"
          type="email"
          placeholder="email"
          disabled={disabled}
        />
        <br/>
        <Form.Label>
          {" "}
          Contanos que te motivó para ser voluntario en el Hogar de Cristo:{" "}
        </Form.Label>
        <Form.Control
          value={state.motivo}
          onChange={handleChange}
          name="motivo"
          type="text"
          placeholder="contanos..."
          disabled={disabled}
        />
        <br/>
        <Form.Label>
          ¿Qué podes ofrecernos? (tiempo, profesión, habilidad, escucha, etc.):{" "}
        </Form.Label>
        <Form.Control
          value={state.habilidades}
          onChange={handleChange}
          name="habilidades"
          type="text"
          placeholder="contanos..."
          disabled={disabled}
        />
      </Form.Group>
    </Form>
  );
};

export default VoluntariadoIndividual;
