
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg' 
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import Hp from './pages/Hp';

function App() {
  
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Hp/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
