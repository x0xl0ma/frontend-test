import React, { useState } from "react";
import Table from "./Table";
import { useSelector, useDispatch } from "react-redux";
import { fetchingData, selectedData } from "../store/reducer";
import Loader from "./Loader";
import { Error } from "./Error";
import { small, big } from "../utils/url";
import ReactPaginate from "react-paginate";
import { chunk } from "lodash";

const MainPage = () => {
  const [mode, setMode] = useState(false);
  const [page, setPage] = useState(0);
  const dispatch = useDispatch();

  const {
    data,
    loading,
    error,
    selectedPerson,
    search,
    sortOrientation,
    sortType,
  } = useSelector((state) => state.dataSlice);

  const buttonHandler = (url) => {
    dispatch(fetchingData(url));
    setMode(!mode);
  };

  const selectionHandler = (data) => {
    dispatch(selectedData(data));
    setPage(0);
  };

  const pageHandler = ({ selected }) => {
    setPage(selected);
  };

  const filtered = () => {
    if (!search) {
      console.log(data);
      return data;
    }
    return data.filter(
      (d) =>
        d["firstName"].toLowerCase().includes(search.toLowerCase()) ||
        d["lastName"].toLowerCase().includes(search.toLowerCase()) ||
        d["email"].toLowerCase().includes(search.toLowerCase)
    );
  };

  const pageSize = 50;
  const filteredData = filtered();
  const pageCount = filteredData.length / pageSize;
  const display = chunk(filteredData, pageSize)[page];

  if (!mode) {
    return (
      <div className="d-flex justify-content-center row">
        <button
          type="button"
          className="btn btn-dark btn-lg p-3 m-5 col"
          onClick={() => buttonHandler(small)}
        >
          Get 32 el
        </button>
        <button
          type="button"
          className="btn btn-dark btn-lg p-3 m-5 col"
          onClick={() => buttonHandler(big)}
        >
          Get 1000 el
        </button>
      </div>
    );
  }

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <Table
          data={display}
          selectedData={selectionHandler}
          selectedPerson={selectedPerson}
          sortOrientation={sortOrientation}
          sortType={sortType}
        />
      )}
      {filteredData.length > pageSize && (
        <div className="d-flex pagination-lg justify-content-center">
          <ReactPaginate
            previousLabel={"<<"}
            nextLabel={">>"}
            breakLabel={"..."}
            breakClassName="break-me"
            pageCount={pageCount}
            marginPagesDisplayed={2}
            pageRangeDisplayed={5}
            onPageChange={pageHandler}
            containerClassName={"pagination"}
            pageClassName="page-item"
            pageLinkClassName="page-link"
            previousClassName="page-item"
            previousLinkClassName="page-link"
            nextClassName="page-item"
            nextLinkClassName="page-link"
            activeClassName="active"
            activeLinkClassName="activ-link"
            className="pagination shadow"
          />
        </div>
      )}

      {error ? <Error /> : null}
    </>
  );
};

export default MainPage;
