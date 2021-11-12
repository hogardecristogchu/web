import React from "react";

const Testimonio = ({testimonio, testigo}) => {
  return (
    <div className="row mt-1">
      <div className="card">
        <div className="card-body">
          <p>{testimonio}</p>
          <p>{testigo}</p>
        </div>
      </div>
    </div>
  );
};

export default Testimonio;
