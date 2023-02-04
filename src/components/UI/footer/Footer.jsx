import React from 'react'
import { Link } from "react-router-dom"
import Burger from '../burger/Burger'
import BurgerOpen from '../burger/BurgerOpen'
import cl from "./MyFooter.module.css"

const Footer = () => {
    return (
        <footer className={cl.footer}>
            <Link to="/" className={cl.link}><div className={cl.footer__logo}></div></Link>
            <Burger />
            <BurgerOpen />
            <Link to="/secret" className={cl.link}><div className={cl.footer__secret}></div></Link>
        </footer>
    )
}

export default Footer