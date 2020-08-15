import React, { useState } from "react";
import { uniqueId } from "lodash";
import Form from "./Form";
import Details from "./Details";
import Searcher from "./Searcher";
import { useDispatch } from "react-redux";
import { sortingData } from "../store/reducer";

const Table = ({
  data,
  selectedData,
  selectedPerson,
  sortOrientation,
  sortType,
}) => {
  const [show, setShow] = useState(false);
  const dispatch = useDispatch();

  const clickHandler = () => {
    setShow(!show);
  };

  const sortHandler = (type) => {
    dispatch(sortingData(data, sortOrientation, type));
  };

  if (!data) {
    return null;
  }

  return (
    <React.Fragment>
      <div className="text-center">
        <button
          type="button"
          className="btn btn-dark btn-lg mt-5"
          onClick={() => clickHandler()}
        >
          {show ? "Скрыть" : "Добавить"}
        </button>
      </div>

      {show && <Form />}

      <Searcher />

      <table className="table m-5">
        <thead className="thead-dark">
          <tr>
            <th scope="col" onClick={() => sortHandler("id")}>
              Id {sortType === "id" ? <small>sort</small> : null}
            </th>
            <th scope="col" onClick={() => sortHandler("firstName")}>
              First name {sortType === "firstName" ? <small>sort</small> : null}
            </th>
            <th scope="col" onClick={() => sortHandler("lastName")}>
              Last name {sortType === "lastName" ? <small>sort</small> : null}
            </th>
            <th scope="col" onClick={() => sortHandler("email")}>
              Email {sortType === "email" ? <small>sort</small> : null}
            </th>
            <th scope="col" onClick={() => sortHandler("phone")}>
              Phone {sortType === "phone" ? <small>sort</small> : null}
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((person) => {
            return (
              <tr key={uniqueId()} onClick={() => selectedData(person)}>
                <th>{person.id}</th>
                <td>{person.firstName}</td>
                <td>{person.lastName}</td>
                <td>{person.email}</td>
                <td>{person.phone}</td>
              </tr>
            );
          })}
        </tbody>
      </table>

      <div>
        {selectedPerson ? <Details selectedPerson={selectedPerson} /> : null}
      </div>
    </React.Fragment>
  );
};

export default Table;
