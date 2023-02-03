import React from 'react'
import { Link } from "react-router-dom"

const Header = () => {
    return (
        <header className="header">
            <Link to="/" className='link'><div className="header__logo"></div></Link>
            <ul className="header__list links">
                <li className="links__item"><Link to="/about" className="links__link">Обо мне</Link></li>
                <li className="links__item"><Link to="/skills" className="links__link">Ключевые Навыки</Link></li>
                <li className="links__item"><Link to="/portfolio" className="links__link">Портфолио</Link></li>
                <li className="links__item"><Link to="/vacancies" className="links__link">Подходящие вакансии</Link></li>
            </ul>
            <div className='header__right right'>
                <Link to="/secret" className='link'><div className="right__secret"></div></Link>
                <div className="right__auth"></div>
            </div>
        </header>
    )
}

export default Header