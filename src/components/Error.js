import React from "react";

export const Error = () => {
  return (
    <div className="d-flex justify-content-center">
      <div className="card border-5 border-danger m-5 p-5 rounded">
        <div className="card-body">
          Something goes wrong. Please, try again!
        </div>
      </div>
    </div>
  );
};
