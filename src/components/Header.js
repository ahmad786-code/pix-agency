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
            <img src={Slice1} alt="" className=' left-[7rem] absolute top-[7rem] object-cover w-[100px]  -z-[3]' />
           
            <h1 className='header-heading text-center'>PIXIE</h1>
            

        </header>
    )
}

export default Header