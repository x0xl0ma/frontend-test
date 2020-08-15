import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { orderBy } from "lodash";

const dataSlice = createSlice({
  name: "dataSlice",
  initialState: {
    loading: false,
    error: false,
    data: [],
    selectedPerson: null,
    search: "",
    sortOrientation: "asc",
    sortType: "id",
  },
  reducers: {
    fetchingDataStart: (state) => {
      state.loading = true;
    },
    fetchingDataSuccess: (state, action) => {
      state.loading = false;
      state.data = action.payload;
    },
    fetchingDataError: (state) => {
      state.error = true;
    },
    addNewData: (state, action) => {
      state.data = [action.payload, ...state.data];
    },
    selectedData: (state, action) => {
      state.selectedPerson = action.payload;
    },
    searchingData: (state, action) => {
      state.search = action.payload;
    },
    sortFetchingData: (state, action) => {
      console.log(action.payload, "payload");
      const { orderedData, sortType, sortDirection } = action.payload;
      state.data = orderedData;
      state.sortOrientation = sortDirection;
      state.sortType = sortType;
    },
  },
});

export const {
  fetchingDataStart,
  fetchingDataSuccess,
  fetchingDataError,
  addNewData,
  selectedData,
  searchingData,
  sortFetchingData,
} = dataSlice.actions;

export function fetchingData(url) {
  return async (dispatch) => {
    dispatch(fetchingDataStart());
    try {
      const response = await axios.get(url);
      let data = response.data;
      const sortedData = orderBy(data, "id", "asc");
      dispatch(fetchingDataSuccess(sortedData));
    } catch (err) {
      dispatch(fetchingDataError(err));
    }
  };
}

export function sortingData(data, sort, sortType) {
  return (dispatch) => {
    const sortDirection = sort === "asc" ? "desc" : "asc";
    const orderedData = orderBy(data, sortType, sortDirection);
    dispatch(sortFetchingData({ orderedData, sortType, sortDirection }));
  };
}

export default dataSlice.reducer;
