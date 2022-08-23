import { useState } from 'react'
import { useEffect } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import axios from 'axios'

function App() {
  const [data, setData] = useState("")
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  
  const getDados = async() => {
    const toArray = [];
    try{
      const url = `http://localhost:3000/gerador`;
      const res = await axios.get(url);      
      
      toArray.push(res.data);
      
      setData(toArray[0]);
      setLoading(!loading);
      setError(null);

    }catch (e){
      console.log("Error: ", e);
      setError(e);
    }
  }
  
  
  console.log(data);
  useEffect(()=>{
    getDados();    
  }, [])    
  
  setInterval(() => {
    
  }, 10000);

  

  return (
    <div className="App">
      {data.length > 0 ?<p>Data: {data[5].data}</p> : ""}      
    </div>
  )
}

export default App
