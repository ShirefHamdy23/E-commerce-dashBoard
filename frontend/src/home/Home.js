import React from 'react';
import { Form } from 'react-bootstrap';

import ProductCard from '../ProductCard';
// import Spinner from 'react-bootstrap/Spinner';
const Home =() =>{
  
    return(
        <div className="home-container px-5">
           
                    
            {/* <Spinner animation="border" role="status" >
            <span className="visually-hidden">Loading...</span>
          </Spinner> */}
        
            
                
<>
                    <Form >

                    <Form.Group className="mb-3 d-flex">
                        <Form.Control type="text" required  placeholder="Search About Products" className="rounded-0"
                         />
                        <button className="btn btn-dark rounded-0">Search</button>
    
                    </Form.Group>
                </Form>
            <div className="row">
                <div className="col-3 card-movie-container">
                <ProductCard/>
                
                </div>
                
                
                </div>
</>
                
            
           
            

         
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