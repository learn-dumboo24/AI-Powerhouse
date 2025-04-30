import React from "react";
import { useState } from 'react'
import "../src/check.css" 
import Navbar from "./assets/navbar.jsx"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
    </>
  )
}

export default App
