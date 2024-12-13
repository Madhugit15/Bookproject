import "./Header.css";
import { useNavigate } from "react-router-dom";
import bookImg from '../images/img9.png'

export default function Header() {
  const navigate = useNavigate();
  return (
    <>
      <div className="header-section">
        <div className="head-about-section">
          <div className="header_head">
            <h2>"A Journey of a Thousand Words" </h2>
          </div>
          <div className="header_para">
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Repudiandae fugiat adipisci totam architecto reiciendis ex labore
              natus, voluptates ullam error, dolore nesciunt harum commodi,
              sequi eius inventore in amet magni!
            </p>
          </div>
          <div className="button">
            <button
              onClick={() => {
                navigate("/books");
              }}
            >
              Explore Books
            </button>
          </div>
        </div>
        <div className="image">
          <img src={bookImg} alt="" />
        </div>
      </div>
    </>
  );
}
