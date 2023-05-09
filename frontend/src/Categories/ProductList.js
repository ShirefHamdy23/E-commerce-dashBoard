///////////MOBILES LIST

import React from 'react';
import Mobiles from './Mobiles';
const ProductList = () => {
  const products = [
    {
      id: 1,
      name: 'Iphone11',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      price: 200,
      image: 'https://mob4me.com/Assets/front/images/mobile/iphone-11-pro-large.jpg'
    },
    {
      id: 2,
      name: 'Samsung A52s',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      price: 50,
      image: 'https://m.media-amazon.com/images/I/718a8zLqyAL.jpg'
    }
  ];

  return (
    <div>
      <h1>Product List</h1>
      <Mobiles products={products} />
    </div>
  );
};

export default ProductList;