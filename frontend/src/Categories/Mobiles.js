// import React  from 'react';

// import ReviewProduct from '../ReviewProduct'
// import "../component/style/Mobiles.css"
// // // import axios from 'axios';
// // import { useParams } from 'react-router-dom';
// // import Spinner from 'react-bootstrap/Spinner';
// import { Link } from 'react-router-dom';
// import { Button } from 'react-bootstrap';
// import { PRODS } from '../';



//  const Mobiles=(props)=>{
    
// //     let{ id}=useParams();
    
// //     const[product,setproduct]=useState({
// //         loading: true,
// //         results:null,
// //         err:null,
// //     });
// //     useEffect(()=>{
// //         setproduct({...product,loading:true})
// //         axios.get("http://localhost:4000/products/"+id )
// //         .then(resp=>{
// //             setproduct({...product, result:resp.data,loading:false,err:null})


// //         })
// //         .catch(err=>{
// //             setproduct({...product,loading:false,err:"something went wrong,please try again later",
// //         });

// //         });

// //     },[]);

//     return(
//         <div className='-details.container p-5'>
           
//             <div className='row'>
//                 <div className="col-3">
//                     <img className="product-image" src="https://mob4me.com/Assets/front/images/mobile/iphone-11-pro-large.jpg"alt=""/>

//                 </div>
//                 <div className='col-9'>
//                     <h3>Iphone </h3>
//                 <p>
//                 Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.



//                 </p>
//                 <div class="price">
// 								<h4>PRICE : $100</h4>
// 				</div>
//                 <Button  className= "btn btn-dark w-100" variant="primary" type="submit">
//                 <Link className= "btn btn-dark w-100" to={'/payment'}> Buy Now</Link>

// </Button>
//                 </div>

//                 <hr/>

//                 <div className="col-3">
//                     <img className="product-image" src="https://m.media-amazon.com/images/I/718a8zLqyAL.jpg"alt=""/>

//                 </div>
//                 <div className='col-9'>
//                     <h3>Samsung A52s </h3>
//                 <p>
//                 Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.


//                 </p>
//                 <div class="price">
// 								<h4>PRICE : $50</h4>
// 				</div>
//                 <Button  className= "btn btn-dark w-100" variant="primary" type="submit">
//                 <Link className= "btn btn-dark w-100" to={'/payment'}> Buy Now</Link>

// </Button>


//                 </div>
                
//             </div>
//             <hr/>
            
//             <h5 className="text-center bg-dark text-white p-2">Review Products</h5>

//             <ReviewProduct/>
//             <ReviewProduct/>
            


        
//         </div>
//     );
// };
// export default Mobiles;
import React from 'react';
import ReviewProduct from '../ReviewProduct';
import "../component/style/Mobiles.css"
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
// import "../component/style/Payment.css"


const Mobiles = ({ products }) => {
  return (
    <div className='-details.container p-5'>
      {products && products.map(product => (
        <div key={product.id} className='row'>
          <div className="col-3">
            <img className="product-image" src={product.image} alt="" />
          </div>
          <div className="col-9">
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <div className="price">
              <h4>PRICE : ${product.price}</h4>
            </div>
          
          </div>
          <Button className="btn btn-dark w-100" variant="primary" type="submit">
              <Link className="btn btn-dark w-100" to={`/payment`}>Buy Now</Link>
            </Button>
          <hr />
        </div>
      ))}
      <hr />
      <h5 className="text-center bg-dark text-white p-2">Review Products</h5>
      {products && products.map(product => (
        <ReviewProduct key={product.id} />
      ))}
    </div>
  );
};

export default Mobiles;


///////////INTEGERATION OF APIS

// import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import { Button } from 'react-bootstrap';
// import axios from 'axios';

// const Mobiles = () => {
//   const [products, setProducts] = useState([]);

//   useEffect(() => {
//     axios.get('https://example.com/api/products')
//       .then(response => setProducts(response.data))
//       .catch(error => console.error(error));
//   }, []);

//   return (
//     <div className='product-details.container p-5'>
//       {products.map(product => (
//         <div key={product.id} className='row'>
//           <div className="col-3">
//             <img className="product-image" src={product.image} alt="" />
//           </div>
//           <div className='col-9'>
//             <h3>{product.name}</h3>
//             <p>{product.description}</p>
//             <div className="price">
//               <h4>PRICE : ${product.price}</h4>
//             </div>
//             <Button className="btn btn-dark w-100" variant="primary" type="submit">
//               <Link className="btn btn-dark w-100" to={`/payment/${product.id}`}>Buy Now</Link>
//             </Button>
//           </div>
//           <hr />
//         </div>
//       ))}
//       <h5 className="text-center bg-dark text-white p-2">Review Products</h5>
//     </div>
//   );
// };

// export default Mobiles;