import React,{useState} from "react";
import Form from "react-bootstrap/Form";

const VoluntariadoGrupal = ({state, handleChange, disabled}) => {

  return (
    <Form>
      <h4>Voluntariado Grupal</h4>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Nombre del grupo/curso y colegio:</Form.Label>
        <Form.Control
          value={state.name}
          name="name"
          onChange={handleChange}
          type="name"
          placeholder="Nombre"
          disabled={disabled}
        />
        <br />
        <Form.Label>Edades aprox (mayor de 16 años):</Form.Label>
        <Form.Control
          value={state.edad}
          onChange={handleChange}
          name="edad"
          type="age"
          placeholder="Edades"
          disabled={disabled}
        />
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
        <br />
        <Form.Label>Provincia</Form.Label>
        <Form.Control
          value={state.provincia}
          onChange={handleChange}
          name="provincia"
          type="place"
          placeholder="Provincia"
          disabled={disabled}
        />
        <br />
        <Form.Label> Celular de coordinador/a o referente:</Form.Label>
        <Form.Control
          value={state.celular}
          onChange={handleChange}
          name="celular"
          type="phone"
          placeholder="Celular"
          disabled={disabled}
        />
        <br />
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
        <br />
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

export default VoluntariadoGrupal;
