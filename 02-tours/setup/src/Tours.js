import React from 'react';
import Tour from './Tour';

const Tours = ({ tours, removeTour }) => {
  return (<>
  {tours.map(tour => <Tour {...tour} key={tour.id} removeTour={removeTour}/>)}
  </>)
};

export default Tours;
