import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchPopularMovies } from "../services/tmdb";
import { Movie } from "../types/global.type";

interface MoviesState {
  popular: Movie[];
  loading: boolean;
  error: string | null;
}

const initialState: MoviesState = {
  popular: [],
  loading: false,
  error: null,
};

export const fetchPopularMoviesThunk = createAsyncThunk<Movie[]>(
  "/movies/popular",
  async () => {
    try {
      const movies = await fetchPopularMovies();
      return movies;
    } catch (error: any) {
      console.log(error.message);
      return error.message;
    }
  }
);

const movieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPopularMoviesThunk.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchPopularMoviesThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.popular = action.payload;
      })
      .addCase(fetchPopularMoviesThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to fetch movies";
      });
  },
});

export default movieSlice.reducer;
