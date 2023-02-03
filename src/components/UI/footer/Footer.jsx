import React from 'react'
import { Link } from "react-router-dom"
import Burger from '../burger/Burger'

const Footer = () => {
    return (
        <footer className='footer'>
            <Link to="/" className='link'><div className="footer__logo"></div></Link>
            <Burger />
            <Link to="/secret" className='link'><div className="footer__secret"></div></Link>
        </footer>
    )
}

export default Footer