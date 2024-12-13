import { useContext } from "react";
import { BookContext } from "../App";
import Footer from "./footer";

import "./booklist.css";
import { Link } from "react-router-dom";

export default function BookLists() {
  const { books, results } = useContext(BookContext);

  return (
    <>
      <h2>{results}</h2>
      <div className="booklist">
        {books.map((book) => {
          return (
            <Link to={`/bookdetails/${book.id} `}>
              <div className="books" key={book.id}>
                <div className="cover_image">
                  <img src={book.image_url} alt="" />
                </div>
                <div className="book_details">
                  <div className="bookname">
                    <h3>{book.title}</h3>
                  </div>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
      
    </>
  );
}
