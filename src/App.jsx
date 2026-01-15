import './App.css'
import {
  Route,
  Routes,
  HashRouter,
  NavLink
} from 'react-router-dom'

import Profile from './pages/profile'
import Main from './pages/main'
import Card from './pages/card' 

function App() {
  return (
    <HashRouter>
      <nav className="navbar">
        <NavLink to='/main' className="logo">
          MOVIE<span>HUB</span>
        </NavLink>
        <div className="nav-links">
          <NavLink to='/main'>ГЛАВНАЯ</NavLink>
          <NavLink to='/profile'>ПРОФИЛЬ</NavLink>
        </div>
      </nav>

      <Routes>
        <Route path='/main' element={<Main/>}/>
        <Route path='/profile' element={<Profile/>}/>
        <Route path='/:title' element={<Card/>}/>
        <Route path='/genre/:genre' element={<Main/>}/>
        <Route path='/' element={<Main/>}/> 
      </Routes>
    </HashRouter>
  )
}

export default App