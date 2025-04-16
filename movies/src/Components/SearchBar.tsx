import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDebounce } from "../services/useDebounce";
import styles from "../styles/SearchBar.module.scss";
import { POSTER_PATH } from "../constants";
import { tmdb } from "../services/tmdb";

type searchBarPorps = {
  searchType: "movie" | "person";
};

function SearchBar({ searchType }: searchBarPorps) {
  const [query, setQuery] = useState<string>("");
  const [searchResults, setSearchResults] = useState<any[]>([]);
  const debouncedQuery = useDebounce(query, 500);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  const search = async (query: string): Promise<any[]> => {
    const response = await tmdb.get(`/search/${searchType}?query=${query}`);
    return response.data.results;
  };

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

  return (
    <>
      <div className={styles.search_container}>
        <input
          type="text"
          onChange={handleInputChange}
          placeholder="Search"
          className={styles.search_bar}
        />
        <div className={styles.search_results}>
          {searchResults.map((result) =>
            searchType === "movie" ? (
              <div className={styles.search_result} key={result.id}>
                <img src={`${POSTER_PATH}${result.poster_path}`} width="10%" />
                <Link to={`/movies/${result.id}`} target="_blank">
                  {result.title}
                </Link>
                <p>{result.overview}</p>
              </div>
            ) : (
              <div className={styles.search_result} key={result.id}>
                <img src={`${POSTER_PATH}${result.profile_path}`} width="10%" />
                <Link to={`/person/${result.id}`}>{result.name}</Link>
                <p>Known for: {result.known_for_department}</p>
              </div>
            )
          )}
        </div>
      </div>
    </>
  );
}

export default SearchBar;
