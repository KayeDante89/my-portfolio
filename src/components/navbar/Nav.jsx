import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link'
import './Nav.css'

export default function Nav() {


	return (
		<div id="nav-container">
			<div id="nav-logo-container"><p>(logo goes here)</p></div>
			<nav id="top-nav" className="nav-content-container" >
				<HashLink title="home" className="nav-menu-link" smooth to="/#top">
          Home
        </HashLink>
				<HashLink title="about" className="nav-menu-link" smooth to="/#about-section">
					About
				</HashLink>
				<Link title="projects" className="nav-menu-link" to="/projects">
					Projects
				</Link>
				<Link title="contact" className="nav-menu-link" to="/contact">
					Contact
				</Link>
			</nav>
		</div>
	);
}