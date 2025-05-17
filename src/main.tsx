import { StrictMode } from 'react'
import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom'
import ReactDOM from "react-dom/client";
import './index.css'



ReactDOM.createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
)
