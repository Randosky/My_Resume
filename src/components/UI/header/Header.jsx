import React from 'react'
import { Link } from "react-router-dom"
import cl from "./MyHeader.module.css"

const Header = () => {
    return (
        <header className={cl.header}>
            <Link to="/" className={cl.link}><div className={cl.header__logo}></div></Link>
            <ul className={cl.header__list}>
                <li className={cl.links__item}><Link to="/about" className={cl.links__link}>Обо мне</Link></li>
                <li className={cl.links__item}><Link to="/skills" className={cl.links__link}>Ключевые Навыки</Link></li>
                <li className={cl.links__item}><Link to="/portfolio" className={cl.links__link}>Портфолио</Link></li>
                <li className={cl.links__item}><Link to="/vacancies" className={cl.links__link}>Подходящие вакансии</Link></li>
            </ul>
            <div className={cl.header__right}>
                <Link to="/secret" className={cl.link}><div className={cl.right__secret}></div></Link>
                <div className={cl.right__auth}></div>
            </div>
        </header >
    )
}

export default Header