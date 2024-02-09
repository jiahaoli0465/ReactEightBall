import React from 'react';
import Ball from "./components/Ball"
import './App.css'

function App() {

  return (
    <div style={{width: '100vw', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: "center", flexDirection: 'column'}}>
      <h1>MAGIC 8 BALL</h1>
      <Ball></Ball>
    </div>
      

  )
}

export default App
