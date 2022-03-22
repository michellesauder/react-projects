import React, { useState, useEffect } from 'react'
import { FaAngleDoubleRight } from 'react-icons/fa'
// ATTENTION!!!!!!!!!!

const url = 'https://course-api.com/react-tabs-project';

function App() {
  const [jobInfo, setJobInfo] = useState([]);
  const [companies, setCompanies] = useState([]);


  const getData = async () => {
    const data = await fetch(url);
    const info = await data.json();
    const companies = new Set(info.map((each) => each.company));
    setJobInfo(info);
    setCompanies(companies)

  }

  useEffect(() => {
    getData();
  },[])

  return (
    <main>
      
    </main>
  )
}

export default App
