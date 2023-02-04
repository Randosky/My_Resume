import React from 'react'
import { openBurger } from '../../../store/webSlice'
import { useDispatch, useSelector } from 'react-redux'
import cl from "./Burger.module.css"

const Burger = () => {
    const dispatch = useDispatch()
    const open = () => dispatch(openBurger())
    const burgVis = useSelector(state => state.webState.burgerVisible)

    return (
        <div className={
            burgVis
                ? cl.burger__locked
                : cl.burger
        } onClick={open}>
            <span className={cl.burger__line}></span>
            <span className={cl.burger__line}></span>
            <span className={cl.burger__line}></span>
        </div>
    )
}

export default Burger