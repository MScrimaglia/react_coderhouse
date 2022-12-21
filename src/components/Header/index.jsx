import React from 'react'
import './style.css'

const Header = (props) => {
    return (
        <header>
            <div className="header">
                <h3><a className="logo" href="/">Brand</a></h3>
                <div className='header-right'>
                    <nav>
                        <ul className="nav__ul">
                            <li className="nav__li"><a className="nav__a" href="/">Inicio</a></li>
                            <li className="nav__li"><a className="nav__a" href="/categoria/celulares">Celulares</a></li>
                            <li className="nav__li"><a className="nav__a" href="/categoria/relojes">Relojes</a></li>
                            <li className="nav__li"><a className="nav__a" href="/categoria/audifonos">Audifonos</a></li>
                        </ul>
                    </nav>
                    {props.children}
                </div>
            </div>
        </header>
    )
}

export default Header