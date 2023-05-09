	


// import React, { useState } from 'react';
// import Alert from "react-bootstrap/Alert"
// import Button from 'react-bootstrap/Button';
// import Form from 'react-bootstrap/Form';

// const UpdateProduct = () => {
//     const [productName, setProductName] = useState('');
//     const [description, setDescription] = useState('');
//     const [ProductPrice, setPrice] = useState('');

//     const [imageFile, setImageFile] = useState(null);

//     const handleProductNameChange = (event) => {
//         setProductName(event.target.value);
//     }

//     const handleDescriptionChange = (event) => {
//         setDescription(event.target.value);
//     }
//     const handleProductPriceChange = (event) => {
//         setPrice(event.target.value);
//     }

//     const handleImageFileChange = (event) => {
//         setImageFile(event.target.files[0]);
//     }

//     const handleSubmit = (event) => {
//         event.preventDefault();
//         // Update the product in the database
//         // ...
//         // Clear the form fields
//         setProductName('');
//         setDescription('');
//         setPrice('');

//         setImageFile(null);
//     }

//     return (
//         <div className='login-container'>
//             <h1>Update Product Form</h1>
//             <Form onSubmit={handleSubmit}>
//                 <Form.Group className="mb-3">
//                     <Form.Control type="text" placeholder="Product Name" value={productName} onChange={handleProductNameChange} />
//                 </Form.Group>
//                 <Form.Group className="mb-3" >
//                     <textarea placeholder="Description" className="form-control" rows={5} value={description} onChange={handleDescriptionChange}></textarea>
//                 </Form.Group>
//                 <Form.Group className="mb-3">
//                     <Form.Control type="text" placeholder="Price" value={ProductPrice} onChange={handleProductPriceChange} />
//                 </Form.Group>
//                 <Form.Group className="mb-3" >
//                     <input type="file" className="form-control" onChange={handleImageFileChange} />
//                 </Form.Group>
//                 <Button className="btn btn-dark w-100" variant="primary" type="submit">
//                     Update Product
//                 </Button>
//             </Form>
//         </div>
//     );
// };

// export default UpdateProduct;

//-------

//////INTEGERATION OF APIS

// import React, { useState } from 'react';
// import Alert from 'react-bootstrap/Alert';
// import Button from 'react-bootstrap/Button';
// import Form from 'react-bootstrap/Form';

// const UpdateProduct = () => {
//   const [name, setName] = useState('');
//   const [description, setDescription] = useState('');
//   const [image, setImage] = useState(null);

//   const handleSubmit = event => {
//     event.preventDefault();

//     const formData = new FormData();
//     formData.append('name', name);
//     formData.append('description', description);
//     formData.append('image', image);

//     fetch('https://example.com/api/products/:id', {
//       method: 'PUT',
//       body: formData
//     })
//       .then(response => response.json())
//       .then(data => console.log(data))
//       .catch(error => console.error(error));
//   };

//   return (
//     <div className="login-container">
//       <h1>Update Product Form</h1>
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
//             onChange={event => setName(event.target.value)}
//           />
//         </Form.Group>
//         <Form.Group className="mb-3">
//           <textarea
//             placeholder="Description"
//             className="form-control"
//             rows={5}
//             value={description}
//             onChange={event => setDescription(event.target.value)}
//           ></textarea>
//         </Form.Group>
//         <Form.Group className="mb-3">
//           <input
//             type="file"
//             className="form-control"
//             onChange={event => setImage(event.target.files[0])}
//           />
//         </Form.Group>
//         <Button className="btn btn-dark w-100" variant="primary" type="submit">
//           Update Product
//         </Button>
//       </Form>
//     </div>
//   );
// };

// export default UpdateProduct;

import React, { useRef, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Alert from "react-bootstrap/Alert";
import { getAuthUser } from "../helper/Storage";

const UpdateProduct = ({ product, updateProduct }) => {
  const [formData, setFormData] = useState({
    name: product ? product.name : "",
    description: product ? product.description : "",
    price: product ? product.price : "",
    image: product ? product.image : "",
  });
  const [err, setErr] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(null);
  const image = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    const updatedProduct = {
      ...product,
      name: formData.name,
      description: formData.description,
      price: formData.price,
      image: formData.image,
    };

    updateProduct(updatedProduct)
      .then(() => {
        setSuccess("Product updated successfully!");
        setLoading(false);
      })
      .catch((err) => {
        setErr(err.message);
        setLoading(false);
      });
  };

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="login-container">
      <h1>Update Product Form</h1>

      {err && (
        <Alert variant="danger" className="p-2">
          {err}
        </Alert>
      )}

      {success && (
        <Alert variant="success" className="p-2">
          {success}
        </Alert>
      )}

      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Control
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            type="text"
            required
            placeholder="Product Name"
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <textarea
            className="form-control"
            name="description"
            value={formData.description}
            required
            onChange={handleInputChange}
            placeholder="Description"
            rows={5}
          ></textarea>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Control
            name="price"
            value={formData.price}
            onChange={handleInputChange}
            type="number"
            required
            placeholder="Price of the product"
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <input
            type="file"
            className="form-control"
            ref={image}
            required
          />
        </Form.Group>

        <Button
          className="btn btn-dark w-100"
          variant="primary"
          type="submit"
          disabled={loading}
        >
          Update Product
        </Button>
      </Form>
    </div>
  );
};

export default UpdateProduct;