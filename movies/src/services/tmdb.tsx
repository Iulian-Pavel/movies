import Axios from "axios";
import { API_KEY, BASE_URL } from "../constants";




//Create Axios instance
export const tmdb = Axios.create({
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

export interface PeopleResponse {
    page: number,
    results: Person[],
    total_pages: number,
    total_results: number,
}

export interface Person {
    id: number,
    name: string,
    known_for_department: string,
    profile_path: string,
    known_for: Known_For[]
}

export interface Known_For {
    title: string
}

export const fetchPopularMovies = async (): Promise<Movie[]> => {
    const response = await tmdb.get("/movie/popular");
    return response.data.results;
}

export const fetchPeople = async (): Promise<Person[]> => {
    const response = await tmdb.get("/person/popular");
    console.log(response.data.results);
    return response.data.results;
}