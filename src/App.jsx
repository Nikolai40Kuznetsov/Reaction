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
      <div>
        <NavLink to='/main'>MAIN</NavLink>
        <NavLink to='/profile'>PROFILE</NavLink>
      </div>
      <Routes>
        <Route path='/main' element={<Main/>}></Route>
        <Route path='/profile' element={<Profile/>}></Route>
        <Route path='/:title' element={<Card></Card>}></Route>
      </Routes>
    </HashRouter>
  )
}

export default App
