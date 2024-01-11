import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchPaginatedCharacterData = createAsyncThunk(
  "main/getPaginatedData",
  async ({ page = 1, searchType = "", queryValue = "" }) => {
    try {
      let apiUrl = `https://rickandmortyapi.com/api/character?page=${page}`;

      if (searchType !== "location" && queryValue) {
        apiUrl += `&${searchType}=${queryValue}`;
      } else if (searchType === "location" && queryValue) {
        apiUrl += `&location.name=${queryValue}`;
      }
      console.log(queryValue);
      const response = await axios.get(apiUrl);

      return {
        nextPage: page + 1,
        prevPage: page - 1,
        charactersInfo: response.data.results,
        pages: response.data.info.pages,
      };
    } catch (error) {
      return error;
    }
  }
);

const initialState = {
  charactersInfo: [],
  pages: 1,
  nextPage: 2,
  prevPage: 1,
  theme: "dark",
};

export const mainSlice = createSlice({
  name: "main",
  initialState,
  reducers: {
    setTheme: (state, action) => {
      state.theme = state.theme === "dark" ? "light" : "dark";
    },
  },
  extraReducers: ({ addCase }) => {
    addCase(fetchPaginatedCharacterData.fulfilled, (state, action) => {
      const { pages, nextPage, prevPage, charactersInfo } = action.payload;
      state.charactersInfo = charactersInfo;
      state.pages = pages;
      state.nextPage = nextPage;
      state.prevPage = prevPage;
    });
  },
});

export const { setTheme } = mainSlice.actions;

export default mainSlice.reducer;
