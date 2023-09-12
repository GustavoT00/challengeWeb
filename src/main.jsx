import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
//import App from './App'
import FirstApp from './FirstApp' 


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <FirstApp title="My first App" />
  </React.StrictMode>,
)
