import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '@fontsource/inter/variable.css'
import '@fontsource/manrope/variable.css'
import './styles/theme.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
