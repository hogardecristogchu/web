import React from "react";

const Testimonio = ({testimonio, testigo}) => {
  return (
    <div className="row mt-1">
      <div className="card testimonio">
        <div className="card-body">
            <p className="p-testimonio">{testimonio}</p>
            <p className="p-testigo">{testigo}</p>
        </div>
      </div>
    </div>
  );
};

export default Testimonio;
