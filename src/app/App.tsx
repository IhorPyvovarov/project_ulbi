import { Suspense } from "react"
import { Routes, Route, Link } from "react-router-dom"

import { classNames } from "shared/lib/ClassNames/classNames"
import { MainPage } from "pages/MainPage/"
import { AboutPage } from "pages/AboutPage"
import { useTheme } from "app/providers/ThemeProvider"

import './styles/index.scss'

export function App() {
  const {theme, toggleTheme} = useTheme();

  return (
    <div className={classNames('app', {}, [theme])}>

        <button onClick={toggleTheme}>Toggle theme</button>

        <Link to={'/'}>Main page</Link>
        <Link to={'/about'}>About page</Link>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
              <Route path={'/about'} element={<AboutPage />} />
              <Route path={'/'} element={<MainPage />} />
          </Routes>
        </Suspense>
    </div>
  )
}
