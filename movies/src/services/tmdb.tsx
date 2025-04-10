import Axios from "axios";
import { API_KEY } from "../constants";

const BASE_URL = "https://api.themoviedb.org/3";


//Create Axios instance
const tmdb = Axios.create({
    baseURL: BASE_URL,
    params: {
        api_key: API_KEY,
    },
})

//This represents a single movie object
export interface Movie {
    id: number,
    title: string,
    release_date: string,
    original_language: string,
    poster_path: string,
    popularity: number,
    overview: string
}


//This represents the entire response
export interface MovieResponse {
    page: number,
    results: Movie[],
    total_pages: number,
    total_results: number
}

export const fetchPopularMovies = async (): Promise<Movie[]> => {
    const response = await tmdb.get("/movie/popular");
    return response.data.results;
}