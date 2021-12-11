import React from "react";
import Testimonio from "./Testimonio";

const Testimonios = ({ testimonios }) => {
  return (
    <div className="container movil my-5 mb-5">
      <div className="row title mb-3">
        <h2 className="h2-m">Testimonios</h2>
      </div>
      {testimonios.map((testimonio, index) => (
        <Testimonio
          key={index}
          testimonio={testimonio.testimonio}
          testigo={testimonio.testigo}
        />
      ))}
    </div>
  );
};

export default Testimonios;
