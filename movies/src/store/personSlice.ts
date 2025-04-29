import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchPeople } from "../services/tmdb";
import { Person } from "../types/global.type";

interface PeopleState {
  people: Person[];
  loading: boolean;
  error: string | null;
  id: number;
}

const initialState: PeopleState = {
  people: [],
  loading: false,
  error: null,
  id: 0,
};

export const fetchPeopleThunk = createAsyncThunk<Person[]>(
  "popular people",
  async () => {
    try {
      const people = await fetchPeople();
      return people;
    } catch (error: any) {
      console.log("people error",error.message);
      throw error;
    }
  }
);

const personSlice = createSlice({
  name: "people",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPeopleThunk.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchPeopleThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.people = action.payload;
      })
      .addCase(fetchPeopleThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to fetch people";
      });
  },
});

export default personSlice.reducer;
