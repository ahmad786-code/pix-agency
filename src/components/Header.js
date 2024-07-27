import React from 'react'
import logo from '../assests/logo.png';
 
 
import AnimatedComponent from './AnimatedComponent';

import { Menu } from "lucide-react";

const Header = () => {
    return (
        <header className="header">

            <nav className="navbar mb-12">
                <div className="img-logo ">
                    <img src={logo} alt="logo" className="logo-img" />
                </div>
                <ul className=" links">

                    <li>
                        <a className="social-btn" href="#">Social</a>
                    </li>

                </ul>
                <div className="menu">
                    <Menu color="#e35270" onClick={() => console.log('red')
                    } />

                </div>
            </nav>
            <div className="w-screen ">
            <AnimatedComponent />

            </div>


        </header>
    )
}

export default Header