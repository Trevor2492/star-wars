import './App.css';
import Header from './components/Header';
import { useEffect, useState } from 'react'
import axios from 'axios'

function App() {

  const [ items, setItems ] = useState(['stuff'])

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios(`https://swapi.dev/api/people/`)

      setItems(response.data.results)
      console.log(response.data.results)
    }

    fetchData()
    
  }, [])

  return (
    <div className="App">
      <Header />
      
    </div>
  );
}

export default App;
