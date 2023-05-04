///////////BRANDS LIST
import React from 'react';
import Brands from './Brands';
const ProductList2 = () => {
  const brands = [
    {
      id: 1,
      name: 'Adidas Shoes ,Sneakers &Slides |Adidas US ',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      price: 24,
      image: 'https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/if_w_gt_800,w_800/enUS/Images/mens-shoes-v2-tcc_tcm221-909628.png '
    },
    {
      id: 2,
      name: ' Nike Go FlyEase Shoe Black',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      price: 50,
      image: 'https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fimage%2F2022%2F05%2Fnike-go-flyease-black-white.jpg?w=960&cbr=1&q=90&fit=max'
    }
  ];

  return (
    <div>
      <h1>Brands List</h1>
      <Brands brands={brands} />
    </div>
  );
};

export default ProductList2;