import React from 'react'
import { Link } from "react-router-dom"
import { openBurger } from '../../../store/webSlice'
import { useDispatch, useSelector } from 'react-redux'
import cl from "./Burger.module.css"

const BurgerOpen = () => {
    const burgVis = useSelector(state => state.webState.burgerVisible)
    const dispatch = useDispatch()
    const open = () => dispatch(openBurger())

    return (
        <div className={
            burgVis
                ? cl.burger__unlocked
                : cl.burger__locked
        }>
            <ul className={cl.locked__list}>
                <li className={cl.locked__item}><Link onClick={open} to="/about" className={cl.locked__link}>Обо мне</Link></li>
                <li className={cl.locked__item}><Link onClick={open} to="/skills" className={cl.locked__link}>Ключевые Навыки</Link></li>
                <li className={cl.locked__item}><Link onClick={open} to="/portfolio" className={cl.locked__link}>Портфолио</Link></li>
                <li className={cl.locked__item}><Link onClick={open} to="/vacancies" className={cl.locked__link}>Подходящие вакансии</Link></li>
            </ul>
        </div>
    )
}

export default BurgerOpen