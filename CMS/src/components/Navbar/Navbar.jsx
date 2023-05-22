import React from 'react'
import { Link, NavLink } from 'react-router-dom' 
import './Navbar.scss'

const Navbar = () => {
    return (
        <nav className="navbar navbar-dark navbar-expand-lg navbar-light bg-primary">
            <div className="container">

            
            <Link className="navbar-brand" to="/">CMS</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
                <ul className="navbar-nav ms-auto">
                    <li className="nav-item active">
                        <NavLink className="nav-link" to="/">Home <span className="sr-only"></span></NavLink>
                    </li>
                    
                    <li className="nav-item active">
                        <NavLink className="nav-link" to="/add">Add <span className="sr-only"></span></NavLink>
                    </li>
                    
                </ul>
            </div>
            </div>
        </nav>
    )
}

export default Navbar