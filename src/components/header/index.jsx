import React from 'react'
import './style.css'
import { useNavigate } from 'react-router-dom';

const Header = (props) => {

    const navigate = useNavigate();

    const categorySelect = (e) => {  
        let category = (e.target.innerText).toLowerCase();
        navigate(`/categoria/${category}`);
    }

    const goToIndex = () => {
        navigate(`/`);
    }

    return (
        <header>
            <div className="header">
                <h3 className="logo" onClick={goToIndex}>Brand</h3>
                <div className='header-right'>
                    <nav>
                        <ul className="nav__ul">
                            <li className="nav__li"><p className="nav__a" onClick={goToIndex}>Inicio</p></li>
                            <li className="nav__li"><p className="nav__a" onClick={categorySelect}>Celulares</p></li>
                            <li className="nav__li"><p className="nav__a" onClick={categorySelect}>Relojes</p></li>
                            <li className="nav__li"><p className="nav__a" onClick={categorySelect}>Audifonos</p></li>
                        </ul>
                    </nav>
                    {props.children}
                </div>
            </div>
        </header>
    )
}

export default Header