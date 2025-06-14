import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import UserDetailsProvider from './contexts/UserDetailsContext.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <UserDetailsProvider>
      <App />
    </UserDetailsProvider>
  </StrictMode>,
)
