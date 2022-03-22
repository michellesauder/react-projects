import React, { useState, useEffect } from 'react';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import { FaQuoteRight } from 'react-icons/fa';
import data from './data';


function App() {
  const [people, setPeople] = useState(data);
  const [index, setIndex] = useState(0);

  useEffect(() => {
  }); 
  

  return (<>
    <section>
      <div className="title">
        <h2>
          <span>/</span> Reviews
        </h2>
        {/* slider container */}
        <div className="section-center">
          {people.map((person, personIndex) => {
            const {image, title, name, quote, id} = person;
            return <article key={id} className="">
                      <img src={image} alt={name} className="person-img"/>
                      <h4>{name}</h4>
                      <p className="title">{title}</p>
                      <p className="text">{quote}</p>
                      <FaQuoteRight className="icon"/>
                    </article>
          })}
          <button className="prev"><FiChevronLeft /></button>
          <button className="next"><FiChevronRight /></button>
        </div>
      </div>
    </section>
  
  
  </>

  )
}

export default App;
