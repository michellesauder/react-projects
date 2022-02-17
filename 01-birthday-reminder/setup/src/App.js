import React, { useState } from 'react';
import data from './data';
import List from './List';


function App() {
  const [people, setPeople] = useState(data);
  console.log(data)

  return (<>
    <main style={{display: 'flex', flexDirection: 'column',}}>
      <h2>reminder project setup</h2>
      <section className="container">
        <div>
          <List people={people}/>
        </div>
        <button onClick={()=> setPeople([])}>Clear all</button>
      </section>
    </main>
  </>);
}

export default App;
