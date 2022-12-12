import { Paper, Button, TextField } from '@mui/material'
import logo from "./assets/agileLogo.jpg"
import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { useContext,useState } from 'react'
import { context } from './Context'

function Login() {
  const [username, setUsername] = useState(null)
  const [password, setPassword] = useState(null)
  const {perssistUser,user} = useContext(context)
  const navigate = useNavigate()
  function handleLogin() {
    perssistUser({username,password})  
  }
  return (
    <Paper
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        padding: 3,
        gap: 5,
        minWidth: 300,
        height: 450
      }}
    >
<img width={250} height="auto" src={logo}/>
     <TextField onChange={(e=>setUsername(e.target.value))} fullWidth label="User name" variant="outlined" />
      <TextField onChange={(e=>setPassword(e.target.value))} fullWidth label="Password" variant="outlined" />

      <Button onClick={handleLogin} fullWidth variant="contained">Login</Button>
    </Paper>
  )
}

export default Login
