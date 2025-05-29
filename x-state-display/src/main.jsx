import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import SelectCountry from './SelectCountry.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <SelectCountry/>
  </StrictMode>,
)
