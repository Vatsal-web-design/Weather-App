import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import SearchCity from './components/SearchCity'
import Data from './components/Data'
import w from './w-img/w.png'

function App() {
  const [temperature, setTemperature] = useState('')
  const [wind, setWind] = useState('')
  const [description, setDescription] = useState('')
  const [term, setTerm] = useState('')
  const [loding, setLoding] = useState(false)
  const [error, setError] = useState(false)


  useEffect(() => {
    fetch(`https://goweather.herokuapp.com/weather/${term}`)
      .then(res => res.json())
      .then(data => {
        setError(false)
        setLoding(true)
        setTemperature(data.temperature);
        setWind(data.wind);
        setDescription(data.description)
        setLoding(false)
      })
      .catch((error) => {
        console.log(error)
      })

  }, [term])

  if (loding) { return <h1>Wait data is loding</h1> }
  if (error) { return <h1 className=''>OPPS....Do not get data</h1> }


  return (
    <>
      <div className='bg-blue-400 h-screen w-screen'>
        <div className='h-1/2 w-1/2 p-10 bg-blue-400 mx-auto '>
          <SearchCity searchinp={(inp) => setTerm(inp)} />
          <Data displayT={temperature} displayW={wind} displayD={description} weather={w} />
        </div>
      </div>
    </>
  )
}

export default App
