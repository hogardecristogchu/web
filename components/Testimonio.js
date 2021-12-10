import React from "react";
import { BsPeopleFill } from "react-icons/bs";

const Testimonio = ({testimonio, testigo}) => {
  return (
    <div className="row mt-1 mb-3">
      <div className="card testimonio card-t">
        <div className="card-body">
            <p className="p-testimonio"><BsPeopleFill className="t-icon" />"{testimonio}"</p>
            <p className="p-testigo">{testigo}</p>
        </div>
      </div>
    </div>
  );
};

export default Testimonio;
