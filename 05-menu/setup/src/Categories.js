import React from 'react';

const Categories = ({ filterItems, categories}) => {
  return (
    <section className="btn-container">
      {categories.map((category) => {
        return <button onClick={filterItems(category)} className="filter-btn">{category}</button>
      })}
    </section>
  )
};

export default Categories;
