
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import React from 'react';
import "../src/component/style/ProductCard.css";
import { Link } from 'react-router-dom';
import productProps from './productProps';

const ProductCard = () => {
  return (
    <div className="images-1">
      {productProps.map((product) => (
        <Card key={product.title}>
          <Card.Img className="firstbrand" variant="top" src={product.image} />
          <Card.Body>
            <Card.Title>{product.title}</Card.Title>
            <Card.Text>{product.description}</Card.Text>
            <Link className="btn btn-dark" to={product.link}>
              Visit Us
            </Link>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};

export default ProductCard;












