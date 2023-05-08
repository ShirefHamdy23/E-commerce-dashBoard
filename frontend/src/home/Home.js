

import {React,useEffect,useState} from 'react';
import { Form } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import '../component/style/ProductCard.css';
import Button from 'react-bootstrap/Button';
import '../component/style/Mobiles.css'

import ProductCard from '../ProductCard';

const Home =() =>{

  const [products, setProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const productsData = JSON.parse(localStorage.getItem("products")) || [];
    setProducts(productsData);
  }, []);

  return(
    <div className="home-container px-5">
      <Form>
        <Form.Group className="mb-3 d-flex">
          <Form.Control type="text" required placeholder="Search About Products" className="rounded-0" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
          <button className="btn btn-dark rounded-0">Search</button>
        </Form.Group>
      </Form>
      <div className="row">
        <div className="col-3 card-movie-container">
          <ProductCard/>
          <div className="images-1">

            {products.filter((product) => product.name.toLowerCase().includes(searchQuery.toLowerCase())).map((product) => (
              
              <Card key={product.id}>
                <Card.Img className="firstbrand" variant="top" src={product.image} />
                <Card.Body>
                  <Card.Title>{product.name}</Card.Title>
                  <Card.Text>{product.description}</Card.Text>
                  <Card.Text>Price : ${product.price}</Card.Text>
                 

                <Link to="/payment" className="btn btn-sm btn-info">

                  BUY NOW
                
                </Link>

              
                  
                </Card.Body>
              </Card>
            ))}
          </div>
        </div>
      </div>

    </div>
  );
};

export default Home;




// ////INTEGERATED WITH APIS


// import React, { useState, useEffect } from 'react';
// import { Form } from 'react-bootstrap';
// import axios from 'axios';

// import Spinner from "react-bootstrap/Spinner";
// import Alert from "react-bootstrap/Alert";
// import ProductCard from '../ProductCard';

// const Home = () => {
//    // const [products,setProducts]=useState({
    //     loading: true,
    //     results: [],
    //     err:null,
    //     reload: 0
    // })
   // const[search,setSearch]=useState("");
    // useEffect(()=>{
    //     setProducts({...movies,loading:true})
    //     axios.get("/////// API LINKKK",{
    //         params:{
    //             search:search,
    //         },
    //     })
    //     .then(resp=>{
    //         setProducts({...products, results:resp.data,loading:false,err:null})


    //     })
    //     .catch(err=>{
    //         setProducts({...products,loading:false,err:"something went wrong,please try again later",
    //     });

    //     });

    // },[products.reload]);

    // const searchProducts=(e)=>{
    //     e.preventDefault();
    //     setProducts({...movies,reload:movies.reload+1})


    // }

//   return (
//     <div className="home-container px-5">
//       <Form onSubmit={searchProducts}>
//         <Form.Group className="mb-3 d-flex">
//           <Form.Control 
//type="text"

 //name="search"
  //required 
  //placeholder="Search About Products" 
  //className="rounded-0"
  //value={search}
  //onChange={(e) => setSearch(e.target.value)}
   //>
//           <button type="submit" className="btn btn-dark rounded-0">
//             Search
//           </button>
//         </Form.Group>
//       </Form>
//       <div className="row">
//         {products.results.map((product) => (
//           <div key={product.id} className="col-3 card-movie-container">
//             <ProductCard 
// name={product.name} 
// description={product.description}
// image={product.image_url}
// id={product.id}

// />
//           </div>
//         ))}
//       </div>

{/* ERRORS HANDLING  */}
// {products.loading === false && [products].err != null && (
//   <Alert variant="danger" className="p-2">
//     {products.err}
//   </Alert>
// )}

// {products.loading === false &&
//   products.err == null &&
//   products.results.length === 0 && (
//     <Alert variant="info" className="p-2">
//       No Products, please try again later !
//     </Alert>
//   )}
//     </div>
//   );
// };

// export default Home;