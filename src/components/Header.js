import React from 'react'
import logo from '../assests/logo.png';
import Slice1 from '../assests/Slice1.png';


import AnimatedComponent from './AnimatedComponent';

import { Menu } from "lucide-react";

const Header = () => {
    return (
        <header className="header relative">
 
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
            <img src={Slice1} alt="" className=' right-0 absolute top-28 object-cover w-[100px] z-50' />
            <div className="w-screen ">
                <AnimatedComponent />

            </div>

        </header>
    )
}

export default Header