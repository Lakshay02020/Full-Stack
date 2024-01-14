import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from 'react'
import './App.css'
import { Landing } from "./components/landing";
import { Room } from "./components/room";

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/room" Component = {Room} />
        <Route path="/" Component = {Landing} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
