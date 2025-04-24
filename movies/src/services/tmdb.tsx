import Axios from "axios";
import { Movie, Person } from "./tmdb.type";
import { API_KEY, BASE_URL } from "../constants";

//Create Axios instance
export const tmdb = Axios.create({
  baseURL: BASE_URL,
  params: {
    api_key: API_KEY,
  },
});

export const fetchPopularMovies = async (): Promise<Movie[]> => {
  const response = await tmdb.get("/movie/popular");
  return response.data.results;
};

export const fetchPeople = async (): Promise<Person[]> => {
  const response = await tmdb.get("/person/popular");
  console.log(response.data.results);
  return response.data.results;
};
