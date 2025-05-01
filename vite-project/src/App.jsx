import { useEffect, useState } from "react"

function App() {
  const [segundos, setSegundos] = useState (0)

  useEffect(() => {
    const intervalo = setInterval(()=>{
      setSegundos(prev => prev+1);
    },1000)

    return () => clearInterval(intervalo)

  },[])

  return (
    <>
    <div>
      <h2>tiempo empezo hace {segundos}segundos</h2>
      <h1>segundos</h1>
    </div>
      
    </>
  )
}

export default App
