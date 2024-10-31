import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { testingService } from './services/testing.services'

function App() {
  const [charter, setCharter] = useState({} as any)
  const fetchData= async ()=>{
    const data=await testingService()
    setCharter(data)
  }
  useEffect(() => {
    try{
      fetchData()
    }catch(err){
      console.log(err)
    }

  }, [])
  
  return (
    <>
    {JSON.stringify(charter)}
      
    </>
  )
}

export default App
