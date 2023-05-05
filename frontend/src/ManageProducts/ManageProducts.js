// import React from 'react';
// import Table from 'react-bootstrap/Table';
// import '../component/style/ManageProducts.css';
// import {Link  } from "react-router-dom";

// import Alert from "react-bootstrap/Alert"


// const ManageProducts = () => {
//     return (
//         <div className='manage-movies p-5 mb-3'>


          
           
//             <div className="header d-flex justify-content-between mb-5">
//             <h3>Manage Products</h3>
//             <Link to={"/manage-products/add"}className="btn btn-success">Add New Movie</Link>

//             </div>
//             <Alert variant="danger" className="p-2">
//         This is simple alert
//     </Alert>
//     <Alert variant="success" className="p-2">
//         This is simple alert
//     </Alert>
//             <Table striped bordered hover size="sm">
//       <thead>
//         <tr>
//           <th>#</th>
//           <th>Image</th>
//           <th>Name</th>
//           <th>Description</th>

//           <th>Action</th>
//         </tr>
//       </thead>
//       <tbody>
//         <tr>
//           <td>1</td>
//           <td>
//           <img className="image-avatar" src="https://mob4me.com/Assets/front/images/mobile/iphone-11-pro-large.jpg"alt=""/>
//           </td>
//           <td></td>
//           <td>Some quick example text to build the card title</td>
//           <td>
//             <button className="btn btn-sm btn-danger">Delete</button>
//             <Link to={"/manage-products/update"} className="btn btn-sm btn-primary mx-2">Update</Link>
//             <Link to={"/mobiles"}className="btn btn-sm btn-info">show</Link>

//           </td>
//         </tr>
//         <tr>
//           <td>2</td>
//           <td>
//           <img className="image-avatar" src="https://m.media-amazon.com/images/I/718a8zLqyAL.jpg"alt=""/>
//           </td>
//           <td>Samsung A52s</td>
//           <td>Some quick example text to build the card title</td>
//           <td>
//             <button className="btn btn-sm btn-danger">Delete</button>
//             <Link to={"/manage-products/update"} className="btn btn-sm btn-primary mx-2">Update</Link>
//             <Link to={"/mobiles"}className="btn btn-sm btn-info">show</Link>

//           </td>
//         </tr>
        

//         <tr>
//           <td>3</td>
//           <td>
//           <img className="image-avatar" src="https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/if_w_gt_800,w_800/enUS/Images/mens-shoes-v2-tcc_tcm221-909628.png "alt=""/>
//           </td>
//           <td>Adidas Shoes</td>
//           <td>Some quick example text to build the card title</td>
//           <td>
//             <button className="btn btn-sm btn-danger">Delete</button>
//             <Link to={"/manage-products/update"} className="btn btn-sm btn-primary mx-2">Update</Link>
//             <Link to={"/brands"}className="btn btn-sm btn-info">show</Link>

//           </td>
//         </tr>
        

//         <tr>
//           <td>4</td>
//           <td>
//           <img className="image-avatar" src="https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fimage%2F2022%2F05%2Fnike-go-flyease-black-white.jpg?w=960&cbr=1&q=90&fit=max"alt=""/>
//           </td>
//           <td>Nike Shoes</td>
//           <td>Some quick example text to build the card title</td>
//           <td>
//             <button className="btn btn-sm btn-danger">Delete</button>
//             <Link to={"/manage-products/update"} className="btn btn-sm btn-primary mx-2">Update</Link>
//             <Link to={"/brands"}className="btn btn-sm btn-info">show</Link>

//           </td>
//         </tr>
        


     
//       </tbody>
//     </Table>
         
//         </div>
//     );
// };

// export default ManageProducts;	


import React, { useState } from 'react';
import Table from 'react-bootstrap/Table';
import '../component/style/ManageProducts.css';
import { Link } from "react-router-dom";
import Alert from "react-bootstrap/Alert";
// import ProductDetails from './ProductDetails';

const ManageProducts = () => {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: 'Fifa 23',
      description: 'Some quick example text to build the card title',
      image:
        'https://mob4me.com/Assets/front/images/mobile/iphone-11-pro-large.jpg',
      price: 59.99,
    },
    {
      id: 2,
      name: 'Samsung A52s',
      description: 'Some quick example text to build the card title',
      image:
        'https://m.media-amazon.com/images/I/718a8zLqyAL.jpg',
      price: 499.99,
    },
    {
      id: 3,
      name: 'Adidas Shoes',
      description: 'Some quick example text to build the card title',
      image:
        'https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/if_w_gt_800,w_800/enUS/Images/mens-shoes-v2-tcc_tcm221-909628.png',
      price: 99.99,
    },
    {
      id: 4,
      name: 'Nike Shoes',
      description: 'Some quick example text to build the card title',
      image:
        'https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fimage%2F2022%2F05%2Fnike-go-flyease-black-white.jpg?w=960&cbr=1&q=90&fit=max',
      price: 129.99,
    },
  ]);

  const handleDelete = (id) => {
    const updatedProducts = products.filter((product) => product.id !== id);
    setProducts(updatedProducts);
  };

  return (
    <div className="manage-movies p-5 mb-3">
      <div className="header d-flex justify-content-between mb-5">
        <h3>Manage Products</h3>
        <Link to={"/manage-products/add"} className="btn btn-success">
          Add New Movie
        </Link>
      </div>
      <Alert variant="danger" className="p-2">
        This is simple alert
      </Alert>
      <Alert variant="success" className="p-2">
        This is simple alert
      </Alert>
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>#</th>
            <th>Image</th>
            <th>Name</th>
            <th>Description</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>
                <img
                  className="image-avatar"
                  src={product.image}
                  alt={product.name}
                />
              </td>
              <td>{product.name}</td>
              <td>{product.description}</td>
              <td>
                <button
                  className="btn btn-sm btn-danger"
                  onClick={() => handleDelete(product.id)}
                >
                  Delete
                </button>
                <Link
                  to={{
                    pathname: "/manage-products/update",
                    state: { product: product },
                  }}
                  className="btn btn-sm btn-primary mx-2 "
                >
                  Update
                </Link>
                <Link
                  to={{
                    pathname: "/",
                    state: { product: product },
                  }}
                  className="btn btn-sm btn-info"
                >
                  Show
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default ManageProducts;






//USING useState , useEffect , APIS


// import React, { useState, useEffect } from "react";
// import Table from "react-bootstrap/Table";
// import "../component/style/ManageProducts.css"
// import { Link } from "react-router-dom";
// import Alert from "react-bootstrap/Alert";
// import axios from "axios";


// const ManageProducts = () => {
//   const [products, setProducts] = useState({
//     loading: true,
//     results: [],
//     err: null,
//     reload: 0,
//   });

//   useEffect(() => {
//     setProducts({ ...products, loading: true });
//     axios
//       .get("///////////LINK OF API")
//       .then((resp) => {
//         setMovies({ ...products, results: resp.data, loading: false, err: null });
//       })
//       .catch((err) => {
//         setProducts({
//           ...products,
//           loading: false,
//           err: " something went wrong, please try again later ! ",
//         });
//       });
//   }, [products.reload]);

//   const deleteProduct = (id) => {
//     axios
//       .delete("///////////LINK OF API" + id, {
//         headers: {
//           token: auth.token,
//         },
//       })
//       .then((resp) => {
//         setProducts({ ...products, reload: products.reload + 1 });
//       })
//       .catch((err) => {});
//   };

//   return (
//     <div className="manage-movies p-5">
//       <div className="header d-flex justify-content-between mb-5">
//         <h3 className="text-center ">Manage Product</h3>
//         <Link to={"add"} className="btn btn-success">
//           Add New Product +
//         </Link>
//       </div>

//       {/* <Alert variant="danger" className="p-2">
//         This is simple alert
//       </Alert>

//       <Alert variant="success" className="p-2">
//         This is simple alert
//       </Alert> */}

//       <Table striped bordered hover>
//         <thead>
//           <tr>
//             <th>#</th>
//             <th>Image</th>
//             <th> Name</th>
//             <th> Description</th>
//             <th>Action</th>
//           </tr>
//         </thead>
//         <tbody>
//           {products.results.map((product) => (
//             <tr key={product.id}>
//               <td>{product.id}</td>
//               <td>
//                 <img
//                   src={product.image_url}
//                   alt={product.name}
//                   className="image-avatar"
//                 />
//               </td>
//               <td> {product.name} </td>
//               <td>{product.description}</td>
//               <td>
//                 <button
//                   className="btn btn-sm btn-danger"
//                   onClick={(e) => {
//                     deleteProduct(product.id);
//                   }}>
//                   Delete
//                 </button>
//                 <Link
//                   to={"" + product.id}
//                   className="btn btn-sm btn-primary mx-2">
//                   Update
//                 </Link>
//                 <Link to={"/" + product.id} className="btn btn-sm btn-info">
//                   show
//                 </Link>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </Table>
//     </div>
//   );
// };

// export default ManageProducts;
