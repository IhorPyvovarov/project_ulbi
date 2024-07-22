import { classNames } from "shared/lib/ClassNames/classNames"
import { useTheme } from "app/providers/ThemeProvider"
import { AppRouter } from "app/providers/router"
import { Navbar } from "widgets/Navbar"

import './styles/index.scss'

export function App() {
  const {theme, toggleTheme} = useTheme();

  return (
    <div className={classNames('app', {}, [theme])}>

        <Navbar />
        <AppRouter />

        <button onClick={toggleTheme}>Toggle theme</button>
    </div>
  )
}
