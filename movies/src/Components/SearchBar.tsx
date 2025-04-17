import React, { useEffect, useState, useCallback } from "react";
import { Link } from "react-router-dom";
import { useDebounce } from "../services/useDebounce";
import styles from "../styles/SearchBar.module.scss";
import { POSTER_PATH } from "../constants";
import { tmdb } from "../services/tmdb";
import nophoto from "../assets/noimageavailable.png";
import nomovieposter from "../assets/nomovieposter.jpg";

type searchBarPorps = {
  searchType: "movie" | "person";
};

interface searchResultTypes {
  id: number;
  title: string;
  overview: string;
  poster_path: string;
  profile_path: string;
  name: string;
  known_for_department: string;
}

function SearchBar({ searchType }: searchBarPorps) {
  const [query, setQuery] = useState<string>("");
  const [searchResults, setSearchResults] = useState<
    searchResultTypes[] | null
  >([]);
  const debouncedQuery = useDebounce(query, 500);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  const search = useCallback(
    async (query: string): Promise<searchResultTypes[]> => {
      const response = await tmdb.get(`/search/${searchType}?query=${query}`);
      return response.data.results;
    },
    [searchType]
  );

  useEffect(() => {
    if (debouncedQuery) {
      search(debouncedQuery).then((results) => {
        console.log(results);
        setSearchResults(results);
      });
    } else {
      setSearchResults([]);
    }
  }, [debouncedQuery]);

  if (!searchResults) return <p>Loading...</p>;

  return (
    <>
      <div className={styles.search_container}>
        <input
          type="text"
          onChange={handleInputChange}
          placeholder="Search"
          className={styles.search_bar}
        />
        <ul className={styles.search_results}>
          {searchResults.map((result) =>
            searchType === "movie" ? (
              <li className={styles.search_result} key={result.id}>
                <img
                  src={
                    !result.poster_path
                      ? nomovieposter
                      : `${POSTER_PATH}${result.poster_path}`
                  }
                  width="10%"
                />
                <Link to={`/movies/${result.id}`} target="_blank">
                  {result.title}
                </Link>
                <p>{result.overview}</p>
              </li>
            ) : (
              <li className={styles.search_result} key={result.id}>
                <img
                  src={
                    !result.profile_path
                      ? nophoto
                      : `${POSTER_PATH}${result.profile_path}`
                  }
                  width="10%"
                  alt="actor picture"
                />
                <Link to={`/person/${result.id}`}>{result.name}</Link>
                <p>Known for: {result.known_for_department}</p>
              </li>
            )
          )}
        </ul>
      </div>
    </>
  );
}

export default SearchBar;
