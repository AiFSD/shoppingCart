import React, { useState } from 'react';
import Text from './header/text';
import Picture from './picture';
import './App.css';
import Card from './cards/cpricename';



let details = [{
  name: 'fancy Product',
  price: '$ 120',
  image: 'https://i.pinimg.com/564x/b3/df/d2/b3dfd2862d1390a281138e1abb4586a8.jpg',
  
  
},
  {
    name: 'fancy Product',
    price: '$ 120',
     image : 'https://i.pinimg.com/564x/b3/df/d2/b3dfd2862d1390a281138e1abb4586a8.jpg'
  }, {
    name: 'fancy Product',
    price:'$ 120',
     image : 'https://i.pinimg.com/564x/b3/df/d2/b3dfd2862d1390a281138e1abb4586a8.jpg'
  }, {
    name: 'fancy Product',
    price: '$ 120',
     image : 'https://i.pinimg.com/564x/b3/df/d2/b3dfd2862d1390a281138e1abb4586a8.jpg'
  },
 {
    name: 'fancy Product',
    price: '$ 120',
     image : 'https://i.pinimg.com/564x/b3/df/d2/b3dfd2862d1390a281138e1abb4586a8.jpg'
  },
 {
    name: 'fancy Product',
    price: '$ 120',
     image : 'https://i.pinimg.com/564x/b3/df/d2/b3dfd2862d1390a281138e1abb4586a8.jpg'
  },
 {
   name: 'fancy Product',
    price: '$ 120',
     image : 'https://i.pinimg.com/564x/b3/df/d2/b3dfd2862d1390a281138e1abb4586a8.jpg'
  },
 {
    name: 'fancy Product',
    price: '$ 120',
     image : 'https://i.pinimg.com/564x/b3/df/d2/b3dfd2862d1390a281138e1abb4586a8.jpg'
  },
 {
    name: 'fancy Product',
    price: '$ 120',
     image : 'https://i.pinimg.com/564x/b3/df/d2/b3dfd2862d1390a281138e1abb4586a8.jpg'
}]

const App = () => {
  const [result, setResult] = useState(0);

  const handleClick = () => {
 
     
      setResult(result + 1); 
    
  
  };
  const handleRemoveClick = () => {
    if(result > 0) 
    setResult(result - 1) 
  } 

  return (
    <div>
      <Text Result={result} />
      <Picture />
      <div className="card-container">
        {details.map((detail, index) => (
          <Card detail={detail} key={index} handleClick={handleClick} handleRemoveClick={ handleRemoveClick} />
        ))}
      </div>
    </div>
  );
};

export default App;