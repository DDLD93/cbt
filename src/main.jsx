import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import ContextProvide from './Context'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ContextProvide>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ContextProvide>
  </React.StrictMode>,
)
