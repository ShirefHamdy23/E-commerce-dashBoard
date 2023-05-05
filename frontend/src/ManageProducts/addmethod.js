import React, { useState } from 'react';
import AddProduct from './AddProduct';

const Products = () => {
  const [products, setProducts] = useState([]);

  const addProduct = (newProduct) => {
    setProducts([...products, newProduct]);
  };

  return (
    <div>
      <h1>Products</h1>
      <AddProduct addProduct={addProduct} />
      {/* Render other components that use the products array */}
    </div>
  );
};

export default Products;