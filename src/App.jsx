import React from 'react'
import './App.css'
import Counter from './components/Counter/Counter'
import IncreasCounter from './components/Counter/IncreasCounter'
import DecreasCounter from './components/Counter/DecreasCounter'
import IncreaseByTwoCounter from './components/Counter/IncreaseByTwoCounter'

function App() {
  return (
    <div>
      <Counter />
      <IncreasCounter />
      <DecreasCounter />
      <IncreaseByTwoCounter />
    </div>
  )
}

export default App
