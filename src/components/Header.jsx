import React, { useState } from 'react';
import './css/Header.css';
import { Link } from 'react-router-dom';
import Logo from '../assets/Logo.png';
import vector from '../assets/Vector.png';
import MenuIcon from '../assets/MenuIcon.svg';
import behance from "../assets/behance.png"
import dribble from "../assets/dribbble.png"
import linkedin from "../assets/linkedin.png"
import upwork from "../assets/Upwork.png"
import Resume from "../assets/Resume.pdf"
const Header = () => {
    const [ToggleMenu, setToggleMenu] = useState( false );

    const handleToggleMenu = () => {
        setToggleMenu( !ToggleMenu ); // Toggle the menu state
    };

    return (
        <div className="navbars">
            <div className="desktop_navbar">
                <div className={ `header ${ToggleMenu ? 'active' : ''}` }>
                    {/* Main Logo */ }
                    <div className="logo">
                        <Link to="/">
                            <img src={ Logo } alt="" />
                        </Link>
                    </div>
                    {/* Navbar Links */ }
                    <div className="nav-items">
                        <ul>
                            <li>
                                <Link className={ `hover-underline ${ToggleMenu ? 'active' : ''}` } to="/">
                                    Portfolio
                                </Link>
                            </li>
                            <li>
                                <Link className={ `hover-underline ${ToggleMenu ? 'active' : ''}` } to="/about">
                                    About
                                </Link>
                            </li>
                            <li>
                                <Link className={ `hover-underline ${ToggleMenu ? 'active' : ''}` } to="/contact">
                                    Contact
                                </Link>
                            </li>
                            <li>
                                <a href={Resume} className={ `hover-underline ${ToggleMenu ? 'active' : ''}` } download={Resume}>
                                    Resume
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>


            {/* Mobile Navbars */ }
            <div
                className={ `Mobile-navbar ${ToggleMenu ? 'active' : ''}` }>
                <div className="Menu_icon">
                    <img src={ MenuIcon } alt="" onClick={ handleToggleMenu } />
                </div>
                <div className="Mobile_logo">
                    <Link to="/">
                        <img src={ Logo } alt="" className="mobile_logo" />
                    </Link>
                </div>
                {/* Navbar Links */ }
                <div className="Mobile-nav"
                    style={ {
                        position: 'fixed',
                        zindex: "10000",
                        top: 0,
                        left: ToggleMenu ? '0' : '-100%', // Use template literals
                        // Add this to take full width
                        transition: 'left 0.5s ease-in-out',

                    } }
                >
                    <div className="openNav">
                        <img src={ vector } alt="" onClick={ handleToggleMenu } />
                        <img src={ Logo } alt="" />
                    </div>
                    
                    <ul>
                        <li>
                            <li>
                                <Link className={ `mobile-Nav-link ${ToggleMenu ? 'active' : ''}` } to="/">
                                    <span className="bullet"></span>
                                    Portfolio
                                </Link>
                            </li>

                        </li>
                        <li>
                            <Link className={ `mobile-Nav-link ${ToggleMenu ? 'active' : ''}` } to="/about">
                                <span className="bullet"></span>
                                About
                            </Link>
                        </li>
                        <li>
                            <Link className={ `mobile-Nav-link ${ToggleMenu ? 'active' : ''}` } to="/contact">
                                <span className="bullet"></span>
                                Contact
                            </Link>
                        </li>
                        <li>
                            <a href={Resume} download={Resume} className={ `mobile-Nav-link 
                            ${ToggleMenu ? 'active' : ''}` }
                                style={ { "color": "#5994ED" } }
                                to="/resume">
                                <span className="bullet"></span>
                                <a href={Resume} download={Resume}>Resume</a>
                                <svg className='ArrowDown' xmlns="http://www.w3.org/2000/svg" width="8" height="14" viewBox="0 0 8 14" fill="none">
                                    <path d="M4.5 1C4.5 0.723858 4.27614 0.5 4 0.5C3.72386 0.5 3.5 0.723858 3.5 1L4.5 1ZM3.64645 13.3536C3.84171 13.5488 4.15829 13.5488 4.35355 13.3536L7.53553 10.1716C7.7308 9.97631 7.7308 9.65973 7.53553 9.46447C7.34027 9.2692 7.02369 9.2692 6.82843 9.46447L4 12.2929L1.17157 9.46447C0.976311 9.2692 0.659729 9.2692 0.464466 9.46447C0.269204 9.65973 0.269204 9.97631 0.464466 10.1716L3.64645 13.3536ZM3.5 1L3.5 13L4.5 13L4.5 1L3.5 1Z" fill="#5994ED" />
                                </svg>
                            </a>
                        </li>
                    </ul>

                    <div className="Contact-nav">
                        <h1 className="contact-Email">rahimughal@gmail.com</h1>
                        <div className="contact-flexbox">
                            <div className="boxes">
                                <a href="">
                                    <img src={behance} alt="" />
                                </a>
                                <a href="">
                                    <img src={dribble} alt="" />
                                </a>
                            </div>
                            <div className="boxes">
                                <a href="">
                                    <img src={linkedin} alt="" />
                                </a>
                                <a href="">
                                    <img src={upwork} alt="" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
