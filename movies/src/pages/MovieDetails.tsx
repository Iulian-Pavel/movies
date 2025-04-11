import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Axios from "axios";
import { API_KEY, POSTER_PATH } from "../constants";
import styles from "../styles/MovieDetails.module.scss";

interface ProductionCompany {
  id: number;
  logo_path: string;
  name: string;
  origin_country: string;
}

interface MovieDetailsData {
  title: string;
  release_date: string;
  poster_path: string;
  vote_average: string;
  overview: string;
  tagline: string;
  runtime: number;
  production_companies: ProductionCompany[];
}

function MovieDetails() {
  const { id } = useParams<{ id: string }>();
  const [movie, setMovie] = useState<MovieDetailsData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const response = await Axios.get<MovieDetailsData>(
          `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`
        );
        setMovie(response.data);
        console.log(response.data);
      } catch (error) {
        console.log("Error fetching movie details");
      } finally {
        setLoading(false);
      }
    };
    fetchMovie();
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (!movie) return <p>Movie not found</p>;

  return (
    <>
      <div className={styles.movie_container}>
        <div className={styles.movie_container_details}>
          <h1 className={styles.movie_title}>{movie.title}</h1>
          <h2>{movie.tagline}</h2>
          <h3>{movie.overview}</h3>
          <p>{movie.release_date}</p>
          <p>{movie.vote_average} out of 10</p>
          <p>{movie.runtime} minutes</p>
        </div>
        <img src={`${POSTER_PATH}${movie.poster_path}`} alt="movie logo" />
      </div>
      <h1 style={{textAlign: "center"}}>Brought to you by:</h1>
      <div className={styles.production_companies}>
        {movie.production_companies.map((company) => (
          <div key={company.id} className={styles.company}>
            {company.logo_path ? (
              <img
                src={`${POSTER_PATH}${company.logo_path}`}
                alt="company logo"
                width={"100%"}
              />
            ) : (
              <p>{company.name}</p>
            )}
          </div>
        ))}
      </div>
    </>
  );
}

export default MovieDetails;
