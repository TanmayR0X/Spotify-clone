import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router'
import PlayerContextProvider from './context/PlayerContext.jsx'
createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <PlayerContextProvider>
      <App />
    </PlayerContextProvider>
  </BrowserRouter>,
)
