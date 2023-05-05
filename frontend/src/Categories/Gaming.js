import React from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import ReviewProduct from '../ReviewProduct';
import '../component/style/Mobiles.css';

const Gaming = ({gamings}) => {
    return (
        <div className='details-container p-5'>
          {gamings.map((gaming) => (
            <div className='row' key={gaming.id}>
              <div className='col-3'>
                <img className='img-fluid' src={gaming.image} alt='' />
              </div>
              <div className='col-9'>
                <h3>{gaming.name}</h3>
                <p>{gaming.description}</p>
                <div class='price'>
                  <h4>PRICE : ${gaming.price}</h4>
                </div>
              
              </div>
              <Button className="btn btn-dark w-100" variant="primary" type="submit">
              <Link className="btn btn-dark w-100" to="/payment">Buy Now</Link>
            </Button>
            </div>
          ))}
          <hr />
          <h5 className='text-center bg-dark text-white p-2'>Review Products</h5>
          <ReviewProduct />
          <ReviewProduct />
    </div>
  );
};

export default Gaming;