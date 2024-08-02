

const Text = ({Result}) => {
  return (
      <div className='header'>
          <div className='start'>
      Start Bootstrap </div>
      <div className='three'>Home
          </div>
          <div className='three'>About
          </div>
          <div className='three'>
              <nav className="navbar"> shop
                 
                </nav>
      </div>
      
          <button className='btn'> Cart  &nbsp;  &nbsp; {Result}</button> 
    </div>
  );
};

export default Text;