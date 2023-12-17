import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
export const GeneralContext = React.createContext(null)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GeneralContext.Provider value={{message:"Good Morning"}}>
      <App />
    </GeneralContext.Provider>
  </React.StrictMode>,
)