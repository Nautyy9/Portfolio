import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {BrowserRouter as Router} from 'react-router-dom'
import Context from '../context/Context'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <Router> 
  <React.StrictMode>
    <Context>
      <App />
    </Context>
  </React.StrictMode>
  </Router>
)
