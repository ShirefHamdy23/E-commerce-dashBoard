
import React from 'react';
import ReviewProduct from '../ReviewProduct';
import "../component/style/Mobiles.css";
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

const Brands = ({ brands }) => {
  return (
    <div className='-details.container p-5'>
      {brands && brands.map(brand => (
        <div key={brand.id} className='row'>
          <div className="col-3">
            <img className="product-image" src={brand.image} alt="" />
          </div>
          <div className="col-9">
            <h3>{brand.name}</h3>
            <p>{brand.description}</p>
            <div className="price">
              <h4>PRICE : ${brand.price}</h4>
            </div>
            
          </div>
          <Button className="btn btn-dark w-100" variant="primary" type="submit">
              <Link className="btn btn-dark w-100" to="/payment">Buy Now</Link>
            </Button>
          <hr />
        </div>
      ))}
      <hr />
      <h5 className="text-center bg-dark text-white p-2">Review brands</h5>
      {brands && brands.map(brand => (
        <ReviewProduct key={brand.id} />
      ))}
    </div>
  );
};

export default Brands;
