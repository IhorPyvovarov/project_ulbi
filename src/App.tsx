import { Suspense } from "react"
import { Routes, Route, Link } from "react-router-dom"
import { MainPageAsync } from "./pages/MainPage/MainPage.async"
import { AboutPageAsync } from "./pages/AboutPage/AboutPage.async"

import './index.scss'

export function App() {
  return (
    <div className="app">
        <Link to={'/'}>Main page</Link>
        <Link to={'/about'}>About page</Link>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
              <Route path={'/about'} element={<AboutPageAsync />} />
              <Route path={'/'} element={<MainPageAsync />} />
          </Routes>
        </Suspense>
    </div>
  )
}
