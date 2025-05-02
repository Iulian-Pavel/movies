import { render, screen } from "@testing-library/react";
import SearchBar from "./SearchBar";
import { SearchTypes } from "../../types/SearchBar.type";
import { BrowserRouter } from "react-router-dom";

test("renders search input", () => {
  render(
    <BrowserRouter>
      <SearchBar searchType={SearchTypes.Movie} />
    </BrowserRouter>
  );

  const input = screen.getByPlaceholderText(/search/i);
  expect(input).toBeInTheDocument();
});
