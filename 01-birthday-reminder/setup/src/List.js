import React from 'react';

const List = ({ people }) => {
  return (
    <>
      <h2>list component</h2>
      {people.map((person, index) => { 
        const { image, name, age, id } = person;
        return (
        <div className="person" key={id} >
          <img src={image} alt={name}></img>
          <p>{name}</p>
          <div>{age}</div>
        </div>)
        })
      }
    </>
  );
};

export default List;
