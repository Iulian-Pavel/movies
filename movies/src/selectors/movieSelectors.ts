import { RootState } from "../store";

export const selectPopularMovies = (state: RootState) => state.movies.popular;
export const selectMoviesLoading = (state: RootState) => state.movies.loading;