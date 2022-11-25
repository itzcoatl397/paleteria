import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Formulario from './components/Formulario'
import Header from './components/Header'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="">
      <Header  title={"La hera Hielo"}/>
      <Formulario/>
      
    </div>
  )
}

export default App
