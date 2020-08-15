import React from "react";

const Details = ({ selectedPerson }) => {
  return (
    <div className="card text-center col-md-6 offset-md-3 border-dark mb-3">
      <div className="card-header"><h4>Выбран пользователь</h4></div>
      <div className="card-body ">
        <h5 className="card-title">
          <b>
            {selectedPerson.firstName} {selectedPerson.lastName}
          </b>
        </h5>

        <textarea
          className="form-control mb-3"
          defaultValue={selectedPerson.description}
        />
        <p>
          Адрес проживания: <b>{selectedPerson.address.streetAddress}</b>
        </p>
        <p>
          Город: <b>{selectedPerson.address.city}</b>
        </p>
        <p>
          Провинция/Штат: <b>{selectedPerson.address.state}</b>
        </p>
        <p>
          Индекс: <b>{selectedPerson.address.zip}</b>
        </p>
      </div>
    </div>
  );
};

export default Details;
