import { Link } from 'react-router-dom'
import './Nav.css'

export const Nav = () => {
    return <nav className="nav">
        <Link to="/"className="navItem">home</Link>
        <Link to="/about" className="navItem">about the amms</Link>
        <Link to="/press" className="navItem">press</Link>
        <Link to="/projects" className="navItem">case studies</Link>
        <Link to="/contact" className="navItem">contact</Link>
        </nav>
}