
import { Link } from "react-router-dom"

import { classNames } from "shared/lib/ClassNames/classNames"
import { useTheme } from "app/providers/ThemeProvider"
import { AppRouter } from "app/providers/router"

import './styles/index.scss'

export function App() {
  const {theme, toggleTheme} = useTheme();

  return (
    <div className={classNames('app', {}, [theme])}>

        <button onClick={toggleTheme}>Toggle theme</button>

        <Link to={'/'}>Main page</Link>
        <Link to={'/about'}>About page</Link>
        <AppRouter />
    </div>
  )
}
