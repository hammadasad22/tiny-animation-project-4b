import React from 'react'
import './Header.css';
import { Link } from 'react-router-dom'
import useWebAnimations, { fadeInDown } from "@wellyshen/use-web-animations";


function Header() {
    const { ref } = useWebAnimations({ ...fadeInDown });

    return (
        <div ref={ref} className="header">
            <ul>
                <li className="first-child"><Link className="links" to="/">Home</Link></li>
                <li><Link className="links" to="services">Services</Link></li>
                <li><Link className="links" to="/contact">Contact us</Link></li>

            </ul>
        </div>
    )
}

export default Header