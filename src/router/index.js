import About from "../pages/About"
import Error from "../pages/Error"
import Home from "../pages/Home"
import Portfolio from "../pages/Portfolio"
import Secret from "../pages/Secret"
import Skills from "../pages/Skills"
import Vacancies from "../pages/Vacancies"

export const routes = [
    { path: "/about", element: <About/>},
    { path: "*", element: <Error/> },
    { path: "/", element: <Home/>},
    { path: "/portfolio", element: <Portfolio/>},
    { path: "/secret", element: <Secret/>},
    { path: "/skills", element: <Skills/>},
    { path: "/vacancies", element: <Vacancies/>},
]