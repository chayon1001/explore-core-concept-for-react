import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './Counter'
import Users from './Users'

function App() {
 const handleClick = () =>{
  alert('click first button');
 }

 function handleClick2 (){
  alert('click button 2')
 }

  return (
    <>
      
      <h1>React core concept</h1>
      <Users></Users>
      <Counter></Counter>
      <button onClick={handleClick}>Click me</button>
      <button onClick={handleClick2}>Click me</button>
      <button onClick={() =>{alert('click button 3')}}>Click me 3</button>

      
      
    </>
  )
}

export default App
