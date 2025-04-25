export interface searchResultTypes {
  id: number;
  title: string;
  overview: string;
  poster_path: string;
  profile_path: string;
  name: string;
  known_for_department: string;
}

export enum SearchTypes {
  Movie = "movie",
  Person = "person",
}

export interface SearchBarProps {
  searchType: SearchTypes;
}


