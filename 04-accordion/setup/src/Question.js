import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';

const Question = ({id, title, info}) => {
  const [toggle, setToggle] = useState(false);

  return (<>
      <div style={{display: 'flex', justifyContent: 'space-between'}}>
        <div className="header">
          <h4>
            {title}
          </h4>
        </div>
        <button className="btn" onClick={() => setToggle(!toggle)}>
            {toggle ? <AiOutlineMinus/> : <AiOutlinePlus/>}
        </button>
      </div>
        <p>
          {toggle && info}
        </p>
  </>)
};

export default Question;
