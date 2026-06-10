import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

import { Signup } from './Signup' 
import { Login } from './Login'

function App() {

  const [currentForm, setCurrentForm] = useState("signup")

  return (
     <div className="App">

    { currentForm === "signup" 
        ? <Signup onFormSwitch={setCurrentForm} /> 
        : <Login onFormSwitch={setCurrentForm} />
    }  

    </div>

  )
}

export default App
