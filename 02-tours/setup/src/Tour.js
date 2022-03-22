import React, { useState } from 'react';

const Tour = ({ image, id, name, info, price, removeTour }) => {
  const [readMore, setReadMore] = useState(false);

  return (<div className="single-tour">
            <img src={image} alt={name}/>
            <button onClick={() => setReadMore(!readMore)}>read more</button>
            {readMore ? <p>{info}</p> : `${info.substring(0, 200)} ...`}
            <div>{name}</div>
            <div>{price}</div>
            <button onClick={() => removeTour(id)}>Not Interested</button>
          </div>

  )
};

export default Tour;
