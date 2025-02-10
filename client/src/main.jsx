import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import {BrowserRouter} from 'react-router-dom' 
import {SpeedInsights} from "@vercel/speed-insights/react"


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <SpeedInsights />
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </StrictMode>,
)
