import React, { useState } from "react";
import Form from "react-bootstrap/Form";

const VoluntariadoIndividual = ({onClick}) => {
  const [state, setState] = useState({
    name: "",
    edad: "",
    city: "",
    provincia: "",
    celular: "",
    email: "",
    motivo: "",
    habilidades: ""
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

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
        />
        <Form.Label>Edad</Form.Label>
        <Form.Control
          value={state.edad}
          onChange={handleChange}
          name="edad"
          type="age"
          placeholder="Edad"
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
        />
        <Form.Label>Provincia</Form.Label>
        <Form.Control
          value={state.provincia}
          onChange={handleChange}
          name="provincia"
          type="place"
          placeholder="Provincia"
        />
        <Form.Label>Celular</Form.Label>
        <Form.Control
          value={state.celular}
          onChange={handleChange}
          name="celular"
          type="phone"
          placeholder="Celular"
        />
        <Form.Label>Email </Form.Label>
        <Form.Control
          value={state.email}
          onChange={handleChange}
          name="email"
          type="email"
          placeholder="email"
        />
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
        />
        <Form.Label>
          ¿Qué podes ofrecernos? (tiempo, profesión, habilidad, escucha, etc.):{" "}
        </Form.Label>
        <Form.Control
          value={state.habilidades}
          onChange={handleChange}
          name="habilidades"
          type="text"
          placeholder="contanos..."
        />
      </Form.Group>
    </Form>
  );
};

export default VoluntariadoIndividual;
