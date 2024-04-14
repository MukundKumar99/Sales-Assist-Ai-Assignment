import { Link } from "react-router-dom";
import "./index.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-menu-container">
        <Link to="/" className="link">
          <h1 className="title">TANN TRIM</h1>
        </Link>
        <div className="icons-container">
          <img
            src="https://res.cloudinary.com/dc2b69ycq/image/upload/v1708088052/CCBP%20Assignments/Group_327_qrllnp.png"
            alt="icon"
          />
        </div>
      </div>
      <div className="nav-link-bg-container">
        <ul className="nav-link-container">
          <li className="nav-link">
            <Link className="link" to="/">
              Bags
            </Link>
          </li>
          <li className="nav-link">
            <Link className="link" to="/travel">
              Travel
            </Link>
          </li>
          <li className="nav-link">
            <Link className="link" to="/accessories">
              Accessories
            </Link>
          </li>
          <li className="nav-link">
            <Link className="link" to="/gifting">
              Gifting
            </Link>
          </li>
          <li className="nav-link">
            <Link className="link" to="/jewellery">
              Jewellery
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
