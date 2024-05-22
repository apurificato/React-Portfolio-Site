import { NavLink } from 'react-router-dom'

function Navigation() {
    return (
        <nav>
            <NavLink to="/about-me">About Me </NavLink>
            <NavLink to="/portfolio">Portfolio </NavLink>
            <NavLink to="/contact-me">Contact Me </NavLink>
        </nav>
    )
  }
  
  export default Navigation