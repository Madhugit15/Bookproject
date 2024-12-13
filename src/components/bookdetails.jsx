import { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { BookContext } from "../App";
// import Footer from "./footer";
import "./bookdetails.css";

export default function BookDetails() {
  const { id } = useParams();
  const { books } = useContext(BookContext);

  const [bookDetails, setBookDetails] = useState([]);

  function Details() {
    const selectedBook = books.find((b) => `${b.id}` === `${id}` && b);

    if (selectedBook) {
      setBookDetails(selectedBook);
    }
  }

  useEffect(() => {
    Details();
  }, [id]);

  

  return (
    <>
      <div className="arrow">
        <Link to="/books">
          <button>
            <i className="fa-solid fa-arrow-left"></i>
          </button>
        </Link>
      </div>

      <div className="single_book_details">
        <div className="bookdetails">
          <div className="cover-image">
            <img src={bookDetails.image_url} alt="cover" />
          </div>
          <div className="details">
            <div className="title">
              <h3>{bookDetails.title}</h3>
            </div>
            <div className="Author">
              <p>
                Author : <span>{bookDetails.authors}</span>
              </p>
            </div>
            <div className="Revision">
              <p>
                Quote : <span>{bookDetails.Quote3}</span>
              </p>
            </div>
            <div className="subject_times">
              <p>
                Pages : <span>{bookDetails.num_pages}</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
