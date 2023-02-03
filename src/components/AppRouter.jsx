import React from 'react'
import { Route, Routes } from 'react-router-dom';
import { routes } from "../router"


const AppRouter = () => {
    return (
        <Routes>
            {routes.map((route) => {
                return <Route key={route.path} element={route.element} path={route.path} />
            })}
        </Routes>
    )
}

export default AppRouter