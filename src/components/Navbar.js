import React,{useEffect, useState} from 'react';
import { Link } from "react-router-dom";
import { AiOutlineEye } from "react-icons/ai";
import { FaBars,FaTimes } from "react-icons/fa";
import { Button } from './Button';
import { IconContext } from 'react-icons/lib';
import "./Navbar.css";

function Navbar() {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);

    const [button, setButton] = useState(true);

    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if (window.innerWidth<=960) 
        {
            setButton(false);
        }
        else
        {
            setButton(true);
        }
    }

    useEffect(() => {
        showButton();
    }, [])

    window.addEventListener('resize', showButton);

    return(
        <>
            <IconContext.Provider value = {{color: '#fff'}}>
                <div className='navbar'>
                    <div className='navbar-container container'>
                        <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
                            <AiOutlineEye className='navbar-icon'/>
                            VISUALIZR
                        </Link>
                        <div className='menu-icon' onClick={handleClick}>
                        {click ? <FaTimes/> : <FaBars/>}
                        </div>
                        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                            <li class="nav-item">
                                <Link to='/' class="nav-links" onClick={closeMobileMenu}>
                                    Home
                                </Link>
                            </li>
                            <li class="nav-item">
                                <Link to='/menu' class="nav-links" onClick={closeMobileMenu}>
                                    Menu
                                </Link>
                            </li>
                            <li class="nav-item">
                                <Link to='/location' class="nav-links" onClick={closeMobileMenu}>
                                    Location
                                </Link>
                            </li>
                            <li class="nav-item">
                                <Link to='/team' class="nav-links" onClick={closeMobileMenu}>
                                    Team
                                </Link>
                            </li>
                            <li class="nav-btn">
                                {button ? (
                                    <Link to='/reservation' class="btn-link" >
                                        <Button buttonStyle='btn--outline'>Make a Reservation</Button>
                                    </Link>
                                ):
                                (
                                    <Link to='/reservation' class="btn-link" onClick={closeMobileMenu}>
                                        <Button buttonStyle='btn--outline' 
                                                buttonSize='btn--mobile'>Make a Reservation</Button>
                                    </Link>
                                )}
                            </li>
                        </ul>
                    </div>
                </div>
            </IconContext.Provider>
        </>
    )
    
}

export default Navbar;