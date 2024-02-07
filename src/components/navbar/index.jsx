import { Link, useLocation } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import "./styles.css";

export default function Nav() {

  const location = useLocation();

  return (
    <div id="nav-container">
      <div id="nav-logo-container">
        <p>kaye m dante</p>
      </div>
      <nav id="top-nav" className="nav-content-container">
        <HashLink
          title="home"
          className='nav-menu-link'
          smooth
          to="/#top"
        >
          Home
        </HashLink>
        <HashLink
          title="about"
          className='nav-menu-link'
          smooth
          to="/#project-section"
        >
          Projects
        </HashLink>
        <Link
          title="contact"
          className={location.pathname === '/contact' ? 'active' : 'nav-menu-link'}
          to="/contact"
        >
          Contact
        </Link>
      </nav>
    </div>
  );
}
