import { useState } from 'react'
import "./style.css"
import Box from './components/Box'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='d-flex'>
     <Box title ="teste" number = {1} color="red"/>
     <Box title ="teste" number = {2} color="teste"/>
     <Box title ="teste" number = {3} color="blue"/>
    </div>
    
  )
}

export default App
