import React, { useState } from 'react';
import { Rating } from 'react-simple-star-rating';



const Card = ({ detail, handleClick,handleRemoveClick }) => {
  const [inCart, setInCart] = useState(false);

  const handleAddToCart = () => {
    setInCart(!inCart);
    if (!inCart) {
 handleClick();
    } else {
      handleRemoveClick();
    }
    
  };

  return (
    <div className="container">
      <div className="nameprice">
        <h4>
          <img className="first" src={detail.image} alt={detail.name} />
        </h4>
        <div>{detail.name}</div>
        <div>{detail.price}</div>
        <div>
          <Rating
            initialValue={4}
            onClick={(rate) => console.log(rate)}
            size={20}
            allowHalfIcon={true}
          />
        </div>
        <button className="bttn" onClick={handleAddToCart}>
          {inCart? 'Remove from Cart' : 'Add to Cart'}
        </button>
      </div>
    </div>
  );
};
export default Card;