import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './componnents/Header/Header'
import Card from './componnents/Card/Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Header></Header>
      <hr className='hr' />
      <Card></Card>
    </div>
  )
}

export default App
