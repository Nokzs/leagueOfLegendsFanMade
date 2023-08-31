import React from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter} from 'react-router-dom'
import {TransitionProvider} from './Route/TransitionProvider/TransitionProvider'

import './index.css'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <BrowserRouter><TransitionProvider/></BrowserRouter>
  </React.StrictMode>
)
