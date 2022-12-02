import React from 'react'
import './style.css'

const Navbar = () => {
    return (
        <nav className="navBar">
            <h3><a className="logo" href="/">Brand</a></h3>
            <ul className="nav__ul">
                <li className="nav__li"><a class="nav__a" href="/">Inicio</a></li>
                <li className="nav__li"><a class="nav__a" href="">Categoria 1</a></li>
                <li className="nav__li"><a class="nav__a" href="/">Categoria 2</a></li>
                <li className="nav__li"><a class="nav__a" href="/">Categoria 3</a></li>
            </ul>
        </nav>
    )
}

export default Navbar