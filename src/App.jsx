import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './componnents/Header/Header'
import Card from './componnents/Card/Card'
import Footer from './componnents/Footer/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Header></Header>
      <hr className='hr' />
      <Card></Card>
      <hr className='hr' />
      <Footer></Footer>
    </div>
  )
}

export default App
