import "./search.css";
import { BookContext } from "../App";
import { useContext } from "react";

export default function Search() {
  const { search, setSearch, books, setBooks, book, setResults } =
    useContext(BookContext);

  function handleSubmit(e) {
    e.preventDefault();
    if (search !== "") {
      const SearchBooks = books.filter((Book) => {
        return Book.title.toLowerCase().includes(search.toLowerCase());
      });

      if (SearchBooks) {
        setBooks(SearchBooks);
      }
      if (SearchBooks.length === 0) {
        setResults("no results found");
      }
    } else {
      setBooks(book);
      setResults("");
    }
  }

  return (
    <div className="search-input">
      <div className="search">
        <form action="" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="eg. The lost world... "
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
            }}
            onKeyUp={handleSubmit}
          />
        </form>
        <button>
          <i className="fa-solid fa-search" onClick={handleSubmit}></i>
        </button>
      </div>
    </div>
  );
}
