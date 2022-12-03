import React from 'react';

function Menu(props) {
  return (
    <div className='note'>
      <h1>{props.name}</h1>
      <p>{props.description}</p>
      <p>Type = {props.ingridients}</p>
      <p>Id={props.restaurantId}</p>
    </div>
  );
}

export default Menu;
