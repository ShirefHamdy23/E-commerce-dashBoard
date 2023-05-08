
import React, { useRef, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Alert from "react-bootstrap/Alert";
import { getAuthUser } from "../helper/Storage";


const AddProduct = ({ addProduct }) => {
  const [product, setProduct] = useState({
    name: "",
    description: "",
    price: "",

    image: "",
    err: "",
    loading: false,
    success: null,
  });

  const image = useRef(null);

  const createProduct = (e) => {
    e.preventDefault();
    setProduct({ ...product, loading: true });
    const formData = new FormData();
    formData.append("name", product.name);
    formData.append("description", product.description);
    formData.append("price", product.price);

    if (image.current.files && image.current.files[0]) {
      formData.append("image", image.current.files[0]);
    }

    // Save the product data to local storage
    const products = JSON.parse(localStorage.getItem("products")) || [];
    const newProduct = {
      id: products.length + 1,
      name: product.name,
      description: product.description,
      price: product.price,

      image: URL.createObjectURL(image.current.files[0]),
    };
    products.push(newProduct);
    localStorage.setItem("products", JSON.stringify(products));

    setProduct({
      ...product,
      loading: false,
      success: "Product added successfully!",
      name: "",
      description: "",
      price: "",
      image: "",
    });
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
            className="form-control"
            placeholder="Description"
            value={product.description}
            required
            onChange={(e) =>
              setProduct({ ...product, description: e.target.value })
            }
            rows={5}></textarea>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Control
            value={product.price}
            onChange={(e) => setProduct({ ...product, price: e.target.value })}
            type="number"
            required
            placeholder="Price of the product"
          />
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