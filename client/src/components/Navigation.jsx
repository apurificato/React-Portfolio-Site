import { NavLink } from 'react-router-dom'

function Navigation() {
    return (
        <nav>
            <NavLink to="/about-me">About Me</NavLink>
            <NavLink to="/work">My Work</NavLink>
            <NavLink to="/contact-me">Contact Me</NavLink>
            <NavLink to="/resume">Resume</NavLink>
        </nav>
    )
  }
  
  export default Navigation