
import Table from 'react-bootstrap/Table';
import '../component/style/ManageProducts.css';
import {Link  } from "react-router-dom";
import {React,useEffect,useState} from 'react';
import Alert from "react-bootstrap/Alert"
import UpdateProduct from './UpdateProduct';

const ManageProducts = ({}) => {


  const [products, setProducts] = useState([]);
  
  
  useEffect(() => {
    const productsData = JSON.parse(localStorage.getItem("products")) || [];
    setProducts(productsData);
  }, []);

  
  const handleDelete = (id) => {
    const updatedProducts = products.filter((product) => product.id !== id);
    setProducts(updatedProducts);
    localStorage.setItem("products", JSON.stringify(updatedProducts));
  };

  return (
    <div className="manage-movies p-5 mb-3">
      <div className="header d-flex justify-content-between mb-5">
        <h3>Manage Products</h3>
        <Link to={"/manage-products/add"} className="btn btn-success">
          Add New Movie
        </Link>
      </div>
     
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>#</th>
            <th>Image</th>
            <th>Name</th>
            <th>price</th>
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
              <td>${product.price}</td>
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
                  className="btn btn-sm btn-danger"
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





