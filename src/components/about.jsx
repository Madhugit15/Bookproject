import "./about.css";
import aboutimg from "../images/img7.png";
import Footer from "./footer";
export default function About() {
  return (
    <>
      <div className="about">
        <div className="about-section">
          <div className="about_img">
            <img src={aboutimg} alt="" />
          </div>
          <div className="about_content">
            <div className="title">
              <h3>About Books</h3>
            </div>
            <div className="about_details">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Consequatur rerum quas aspernatur. Explicabo, molestias error
                autem nesciunt nostrum id possimus laboriosam vitae nobis fugiat
                iste illum dolores. Commodi quisquam expedita repellat at eum
                odio inventore aperiam vel, excepturi nihil consequatur
                consequuntur quas suscipit maxime quos et necessitatibus ex
                minima similique.Lorem ipsum dolor sit, amet consectetur
                adipisicing elit. Quod cumque ea magni voluptatem? Aut minus
                saepe quisquam quod debitis. Quod. Lorem ipsum, dolor sit amet
                consectetur adipisicing elit. Amet qui repellendus explicabo
                perspiciatis commodi, fuga cum autem provident, voluptatibus sit
                quas, et necessitatibus. Beatae dolor, earum optio animi quasi
                incidunt fugiat debitis. Dolores, maxime! Adipisci enim
                excepturi illo? Deleniti, quidem? Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Inventore beatae, deserunt dicta
                quia suscipit tenetur atque molestias fugiat assumenda quae
                quibusdam soluta debitis, modi eos natus ad, incidunt dolore
                ipsam!
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
