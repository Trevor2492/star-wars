import './App.css';
import Header from './components/Header';
import ItemGrid from './components/ItemGrid';
import { useEffect, useState } from 'react'
import axios from 'axios'
import NativeSelect from './components/NativeSelect';

function App() {

  const [ items, setItems ] = useState([])
  const [query, setQuery] = useState('people')

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios(`https://swapi.dev/api/${query}/`)

      setItems(response.data.results)
      console.log(response.data.results)
    }

    fetchData()
    
  }, [query])

  return (
    <div className="App">
      <Header />
      <NativeSelect getQuery={(q) => setQuery(q)}/>
      <ItemGrid items={items} />
      
    </div>
  );
}

export default App;
