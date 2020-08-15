import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { searchingData } from "../store/reducer";

const Searcher = () => {
  
  const [value, setValue] = useState("");

  const dispatch = useDispatch();

  return (
    <div className="input-group m-3 shadow">
      <input
        type="text"
        className="form-control"
        aria-describedby="inputGroup-sizing-default"
        placeholder="Type a person"
        onChange={(e) => setValue(e.target.value)}
        value={value}
      />
      <button
        className="btn btn-dark"
        type="button"
        onClick={() => dispatch(searchingData(value))}
      >
        Search
      </button>
    </div>
  );
};

export default Searcher;
