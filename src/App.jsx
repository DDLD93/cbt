import { useContext } from 'react'
import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import { context } from './Context'
import Login from './Login'
import Modules from './Modules'
import Questionaire from './Questionaire'


function App() {
  const {user} = useContext(context)
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      {!user ?<Login/>:
      
    <Routes>    
      <Route path="/modules" element={<Modules />} />
      <Route path="/question" element={<Questionaire />} />  
      <Route path="*" element={<Modules />} /> 
  </Routes>}
      
    </div>
  )
}

export default App
