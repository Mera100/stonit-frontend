import Map from './components/Map'
import {useState, useEffect} from 'react'
import Loader from './components/Loader'
import Header from './components/Header'

function App() {
  const [stonesData, setStonesData] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const fetchEvents = async () => {
      setLoading(true)
      const res = await fetch('http://localhost:8080/stone/getAll')
      const stones = await res.json()

      setStonesData(stones)
      setLoading(false)
    }

    fetchEvents()
  }, [])

  return (
    <div className="App">
      <Header />
      {!loading ? <Map stonesData={stonesData} /> : <Loader /> }
    </div>
  );
}

export default App;
