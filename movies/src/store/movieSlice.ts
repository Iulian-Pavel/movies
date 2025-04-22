import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchPopularMovies, Movie } from "../services/tmdb";

interface MoviesState {
    popular: Movie[];
    loading: boolean;
    error: string | null;
};

const initialState: MoviesState = {
    popular: [],
    loading: false,
    error: null
};

export const fetchPopularMoviesThunk = createAsyncThunk<Movie[]>(
    '/movies/popular',
    async () => {
        const movies = await fetchPopularMovies();
        return movies;
    }
);

const movieSlice = createSlice({
    name: 'movies',
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
            state.error = action.error.message || 'Failed to fetch movies';
        });
    },
});

export default movieSlice.reducer;