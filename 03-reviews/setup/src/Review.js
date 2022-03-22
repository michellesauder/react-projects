import React, { useState } from 'react';
import data from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';


const Review = () => {
  const [index, setIndex] = useState(0);
  const { id, name, job, image, text } = data[index];

  const checkPersonNumber = (num) => { 
    if(num > data.length - 1) {
      //returns the last items in the array
      return 0;
    }
    if(num < 0){
      return data.length - 1
    }
    return num;
  }

  const nextPerson = () => {
    setIndex((index) => {
      let newIndex = index + 1;
      return checkPersonNumber(newIndex)
    })

  }

  const prevPerson = () => {
    setIndex((index) => {
      let newIndex = index - 1;
      return checkPersonNumber(newIndex)
    })
  }

  const randomPerson = () => {
    setIndex((index) => {
      let newIndex = Math.floor(Math.random() * (data.length - 1));
      if(newIndex === index){
          newIndex = index + 1;
      }
      return checkPersonNumber(newIndex)
    })
  }

  return <>
    <article key={id} className="container review">
        <div className="img-container">
          <img className="person-img" src={image} alt={name}/>
          <FaQuoteRight/>
        </div>
        <h1 className="author">{name}</h1>
        <p className="job">{job}</p>
        <p className="info">{text}</p>
        <div className="button-container">
          <button className="prev-btn">
            <FaChevronLeft onClick={prevPerson} />
          </button>
          <button className="next-btn">
            <FaChevronRight onClick={nextPerson}/>
          </button>
        </div>
        <button className="random-btn" onClick={randomPerson}>
            Surprise Me
          </button>
      </article>
  </>;
};

export default Review;
