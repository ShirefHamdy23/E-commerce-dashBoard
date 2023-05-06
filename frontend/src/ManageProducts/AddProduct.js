import React, { useRef, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Alert from "react-bootstrap/Alert";
import { Link } from "react-router-dom";

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
      image: image.current.files[0]
        ? URL.createObjectURL(image.current.files[0])
        : null,
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

        <Form.Group className="mb-3"></Form.Group>

        <Form.Group className="mb-3">
          <input type="file" className="form-control" ref={image} required />
        </Form.Group>

        <Link to="/" className="btn btn-dark w-100">
          Add New Product
        </Link>
      </Form>
    </div>
  );
};

export default AddProduct;
