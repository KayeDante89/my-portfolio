import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import "./styles.css";

export default function Nav() {
  return (
    <div id="nav-container">
      <div id="nav-logo-container">
        <p>kaye m dante</p>
      </div>
      <nav id="top-nav" className="nav-content-container">
        <HashLink title="home" className="nav-menu-link" smooth to="/#top">
          Home
        </HashLink>
        <HashLink
          title="about"
          className="nav-menu-link"
          smooth
          to="/#project-section"
        >
          Projects
        </HashLink>
        <Link title="contact" className="nav-menu-link" to="/contact#top">
          Contact
        </Link>
      </nav>
    </div>
  );
}
