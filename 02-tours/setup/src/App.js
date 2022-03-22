import React, { useState, useEffect } from 'react'
import Loading from './Loading'
import Tours from './Tours';
// ATTENTION!!!!!!!!!!
const url = 'https://course-api.com/react-tours-project';

function App() {
  const [loading, setLoading] = useState(false);
  const [tours, setTours] = useState([]);


  const fetchTours = async () => {
    setLoading(true);
    try {    
      const response = await fetch(url);
      const tours =  await response.json();
      setTours(tours);
      setLoading(false);
    }catch (e) {
      setLoading(false);
      console.log(e); 
    }
  }

  const removeTour = (id) => {
    const newTours = tours.filter((tour) => tour.id !== id);
    setTours(newTours)
  }

  useEffect(() => {
      fetchTours();
  },[]);

  return (<main>
    {loading ? <Loading/> : <Tours tours={tours} removeTour={removeTour}/> }
  </main>)

}

export default App
