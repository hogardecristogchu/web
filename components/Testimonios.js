import React from "react";
import Testimonio from "./Testimonio";

const Testimonios = ({ testimonios }) => {
  return (
    <div className="container my-5">
      <div className="row title">
        <h2>Testimonios</h2>
      </div>
      {testimonios.map((testimonio) => (
        <Testimonio
          testimonio={testimonio.testimonio}
          testigo={testimonio.testigo}
        />
      ))}
    </div>
  );
};

export default Testimonios;
