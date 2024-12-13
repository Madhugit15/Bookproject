import About from "./components/about";
import Header from "./components/Header";
import Nav from "./components/nav";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useState, createContext } from "react";
import Books from "./components/books";
import BookDetails from "./components/bookdetails";
import book from './book.json'
import Footer from "./components/footer";


export const BookContext = createContext();

function App() {
  const [books, setBooks] = useState(book);
  const [search, setSearch] = useState("");
  const [results, setResults] = useState("");
  const [loading, setLoading] = useState(false);
  // const URL= "https://openlibrary.org/search.json?q=";

 
  return (
    <BookContext.Provider
      value={{
        books,
        // loading,
        search,
        results,
        setSearch,
        setResults,
        setBooks,
        book
       
      }}
    >
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Header />} />
          <Route path="about" element={<About />} />
          <Route path="/books" element={<Books />} />
          <Route path="/bookdetails/:id" element={<BookDetails />} />
        </Routes>
        <Footer/>
      </BrowserRouter>
     
    </BookContext.Provider>
  );
}

export default App;
