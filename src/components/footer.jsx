import { Link } from "react-router-dom";
import './footer.css'
export default function Footer() {
  return (
    <div className="footer">
      <div className="footer-details">
        <div className="icons">
          <i className="fa-brands fa-instagram"></i>
          <i className="fa-brands fa-twitter"></i>
          <i className="fa-brands fa-facebook"></i>
        </div>
        <div className="footer-details">
            <ul>
          <li><p>Home</p></li>
          <li><p>About</p></li>
          <li><p>Terms</p></li>
          <li><p>Privacy Policy</p></li>

          
            </ul>
         
        </div>
      </div>
      <div className="copyrights">
        <p>Books &#169; 2024</p>
      </div>
    </div>
  );
}
