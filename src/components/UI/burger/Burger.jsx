import React from 'react'
import { Link } from "react-router-dom"
import { openBurger } from '../../../store/webSlice'
import { useDispatch, useSelector } from 'react-redux'

const Burger = () => {
    const dispatch = useDispatch()
    const open = () => dispatch(openBurger())
    const rootClasses = useSelector(state => state.webState.burgerClass)

    return (
        <div className='burger' onClick={open}>
            <div className='burger'>
                <span className='burger__line'></span>
                <span className='burger__line'></span>
                <span className='burger__line'></span>
            </div>
            <div className={rootClasses}>
                <ul className="locked__list">
                    <li className="locked__item"><Link to="/about" className="locked__link">Обо мне</Link></li>
                    <li className="locked__item"><Link to="/skills" className="locked__link">Ключевые Навыки</Link></li>
                    <li className="locked__item"><Link to="/portfolio" className="locked__link">Портфолио</Link></li>
                    <li className="locked__item"><Link to="/vacancies" className="locked__link">Подходящие вакансии</Link></li>
                </ul>
            </div>
        </div>
    )
}

export default Burger