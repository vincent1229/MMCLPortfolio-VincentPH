
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import '@fontsource/inter'
import '@fontsource/manrope'
import './theme.css'

import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
)
