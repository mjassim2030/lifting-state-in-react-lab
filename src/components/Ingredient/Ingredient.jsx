import React from 'react'

const Ingredient = ({ ingredient, onClick, type }) => {
  return (
    ingredient ? 
    <li style={{ backgroundColor: ingredient.color }}>
      {ingredient.name}
      {type === "add" && (
        <button onClick={() => onClick(ingredient)}>+</button>
      )}
      {type === "remove" && (
        <button onClick={() => onClick(ingredient)}>X</button>
      )}
    </li>
    : ""
  );
};

export default Ingredient;
