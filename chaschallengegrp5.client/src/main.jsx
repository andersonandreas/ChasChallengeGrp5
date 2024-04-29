import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter as Router } from 'react-router-dom';
import { AuthProvider } from './components/Auth';
import { AnswerProvider } from './components/AnswerContext.jsx';
import { ToggleProvider } from './components/button.jsx';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <AuthProvider>
        <AnswerProvider>
          <ToggleProvider>
            <App />
          </ToggleProvider>
        </AnswerProvider>
      </AuthProvider>
    </Router>
  </React.StrictMode>,
)
