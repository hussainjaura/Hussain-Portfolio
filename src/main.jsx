// react stuff and the main app plus the styles:
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// puts the whole app inside the root div in index.html:
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
)
