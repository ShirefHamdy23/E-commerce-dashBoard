// import React from 'react';
// import Alert from "react-bootstrap/Alert"
// import Button from 'react-bootstrap/Button';
// import Form from 'react-bootstrap/Form';
// const AddProduct = () => {
//     return ( <div className='login-container'>
//     <h1>Add New Product Form</h1>
//     <Alert variant="danger" className="p-2">
//         This is simple alert
//     </Alert>
//     <Alert variant="success" className="p-2">
//         This is simple alert
//     </Alert>
//     <Form>
// <Form.Group className="mb-3">

// <Form.Control type="text" placeholder="Product Name" />

// </Form.Group>

// <Form.Group className="mb-3" >
//     <textarea placeholder="Description" className="form-control" rows={5}>

//     </textarea>
// </Form.Group>
// <Form.Group className="mb-3" >
//     <input type="file" className="form-control">
//     </input>
// </Form.Group>

// <Button className="btn btn-dark w-100" variant="primary" type="submit">
// Add New Product
// </Button>
// </Form>
// </div>
//     );
// };

// export default AddProduct;	



//USING useState , useEffect , APIS


// import React, { useRef, useState } from "react";
// import Button from "react-bootstrap/Button";
// import Form from "react-bootstrap/Form";
// import Alert from "react-bootstrap/Alert";
// import { getAuthUser } from "../helper/Storage";
// import axios from "axios";

// const AddProduct = () => {
//   const auth = getAuthUser();
//   const [product, setProduct] = useState({
//     name: "",
//     description: "",
//     err: "",
//     loading: false,
//     success: null,
//   });

//   const image = useRef(null);

//   const createProduct = (e) => {
//     e.preventDefault();

//     setProduct({ ...product, loading: true });

//     const formData = new FormData();
//     formData.append("name", product.name);
//     formData.append("description", product.description);
//     if (image.current.files && image.current.files[0]) {
//       formData.append("image", image.current.files[0]);
//     }
//     axios
//       .post("///////API LINKKK", formData, {
//         headers: {
//           token: auth.token,
//           "Content-Type": "multipart/form-data",
//         },
//       })
//       .then((resp) => {
//         setProduct({
//           name: "",
//           description: "",
//           err: null,
//           loading: false,
//           success: "Product Created Successfully !",
//         });
//         image.current.value = null;
//       })
//       .catch((err) => {
//         setProduct({
//           ...product,
//           loading: false,
//           success: null,
//           err: "Something went wrong, please try again later !",
//         });
//       });
//   };

//   return (
//     <div className="login-container">
//       <h1>Add New Product Form</h1>

//       {product.err && (
//         <Alert variant="danger" className="p-2">
//           {product.err}
//         </Alert>
//       )}

//       {product.success && (
//         <Alert variant="success" className="p-2">
//           {product.success}
//         </Alert>
//       )}

//       <Form onSubmit={createProduct}>
//         <Form.Group className="mb-3">
//           <Form.Control
//             value={product.name}
//             onChange={(e) => setMovie({ ...product, name: e.target.value })}
//             type="text"
//             required
//             placeholder="Product Name"
//           />
//         </Form.Group>

//         <Form.Group className="mb-3">
//           <textarea
//             className="form-control"
//             placeholder="Description"
//             value={product.description}
//             required
//             onChange={(e) =>
//               setProduct({ ...product, description: e.target.value })
//             }
//             rows={5}></textarea>
//         </Form.Group>

//         <Form.Group className="mb-3">
//           <input type="file" className="form-control" ref={image} required />
//         </Form.Group>

//         <Button className="btn btn-dark w-100" variant="primary" type="submit">
//           Add New Product
//         </Button>
//       </Form>
//     </div>
//   );
// };

// export default AddProduct;


// import React, { useState } from 'react';
// import Alert from "react-bootstrap/Alert"
// import Button from 'react-bootstrap/Button';
// import Form from 'react-bootstrap/Form';

// const AddProduct = ({ addProduct }) => {
//   const [name, setName] = useState('');
//   const [description, setDescription] = useState('');
//   const [image, setImage] = useState('');

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const newProduct = {
//       id: Math.floor(Math.random() * 1000) + 1,
//       name: name,
//       description: description,
//       image: image,
//       price: 0,
//     };
//    addProduct(newProduct);
//     setName('');
//     setDescription('');
//     setImage('');
//   };

//   return (
//     <div className='login-container'>
//       <h1>Add New Product Form</h1>
//       <Alert variant="danger" className="p-2">
//         This is simple alert
//       </Alert>
//       <Alert variant="success" className="p-2">
//         This is simple alert
//       </Alert>
//       <Form onSubmit={handleSubmit}>
//         <Form.Group className="mb-3">
//           <Form.Control
//             type="text"
//             placeholder="Product Name"
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//           />
//         </Form.Group>
//         <Form.Group className="mb-3">
//           <textarea
//             placeholder="Description"
//             className="form-control"
//             rows={5}
//             value={description}
//             onChange={(e) => setDesc	Fifa 23	Some quick example text to build the card title	￼DeleteUpdateShow
2	￼	Samsung A52s	Some quick example text to build the card titleription(e.target.value)}
//           ></textarea>
//         </Form.Group>
//         <Form.Group className="mb-3">
//           <input
//             type="file"
//             className="form-control"
//             value={image}
//             onChange={(e) => setImage(e.target.value)}
//           />
//         </Form.Group>
//         <Button  className="btn btn-dark w-100" variant="primary" type="submit">
//           Add New Product
//         </Button>
//       </Form>
//     </div>
//   );
// };

// export default AddProduct;
















import React, { useRef, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Alert from "react-bootstrap/Alert";


const AddProduct = ({ addProduct }) => {
  const [product, setProduct] = useState({
    name: "",
    description: "",
    err: "",
    loading: false,
    success: null,
  });

  const image = useRef(null);

  const createProduct = (e) => {
    e.preventDefault();

    const newProduct = {
      id: Date.now(),
      name: product.name,
      description: product.description,
      image: image.current.files[0] ? URL.createObjectURL(image.current.files[0]) : null,
      price: 0,
    };
    addProduct(newProduct);
    setProduct({
      name: "",
      description: "",
      err: null,
      loading: false,
      success: "Product Created Successfully !",
    });
    image.current.value = null;
  };

  return (
    <div className="login-container">
      <h1>Add New Product Form</h1>

      {product.err && (
        <Alert variant="danger" className="p-2">
          {product.err}
        </Alert>
      )}

      {product.success && (
        <Alert variant="success" className="p-2">
          {product.success}
        </Alert>
      )}

      <Form onSubmit={createProduct}>
        <Form.Group className="mb-3">
          <Form.Control
            value={product.name}
            onChange={(e) => setProduct({ ...product, name: e.target.value })}
            type="text"
            required
            placeholder="Product Name"
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <textarea
            className="form-coconst AddProduct = ({ addProduct }) => {
  const [product, setProduct] = useState({
    name: "",
    description: "",
    err: "",
    loading: false,
    success: null,
  });ntrol"
            placeholder="Description"
            value={product.description}
            required
            onChange={(e) =>
              setProduct({ ...product, description: e.target.value })
            }
            rows={5}></textarea>
        </Form.Group>

        <Form.Group className="mb-3">
          <input type="file" className="form-control" ref={image} required />
        </Form.Group>

        <Button className="btn btn-dark w-100" variant="primary" type="submit">
          Add New Product
        </Button>
      </Form>
    </div>
  );
};

export default AddProduct;