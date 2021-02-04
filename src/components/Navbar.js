import React from 'react';
import { Link } from "react-router-dom";
import { AiOutlineEye } from "react-icons/ai";
import { FaBars,FaTimes } from "react-icons/fa";

function Navbar() {
    const [click, setClick] = useState(false)

    const handleClick = () => setClick(!click)

    return(
        <>
            <div className='navbar'>
                <div className='navbar-container container'>
                    <Link to='/' className='navbar-logo'>
                        <AiOutlineEye className='navbar-icon'/>
                        VISUALIZR
                    </Link>
                    <div className='menu-icon' onClick={handleClick}>
                    {click ? <FaTimes/> : <FaBars/>}
                    </div>
                </div>
            </div>
        </>
    )
    
}