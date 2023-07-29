import React from 'react';
import './Card.css';

const Card = (props) => {

    return (
      
        <div className='CreatorCard'>
            <img className='CardImage' alt='creator image' src={props.imageURL}></img>
            <h2>{props.name}</h2>
        </div>
      
    )
  }
  
  export default Card