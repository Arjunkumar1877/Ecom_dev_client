import { useState } from 'react';
import './App.css';
import Login from './pages/user/Login';
import Signup from './pages/user/SignUp';
import Header from './components/user/Header';

function App() {
  const [count, setCount] = useState(0)

  return (
 <>
 <Header/>
 <Signup/>
 
 </>
  )
}

export default App
