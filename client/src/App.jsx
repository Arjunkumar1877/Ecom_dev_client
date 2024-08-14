import { useState } from 'react';
import './App.css';
import Login from './pages/user/Login';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './styles/fonts.css'
import LandingPage from './pages/user/LandingPage';


function App() {
  const [count, setCount] = useState(0)

  return (
 <BrowserRouter>
   
   <Routes>
    <Route path='/' element={<LandingPage />} />
    <Route path='/login' element={<Login />} />

   </Routes>
 </BrowserRouter>
  )
}

export default App
