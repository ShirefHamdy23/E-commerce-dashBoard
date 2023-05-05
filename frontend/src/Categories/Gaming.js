import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import ReviewProduct from "../ReviewProduct";
import "../component/style/Mobiles.css";
const Gaming = ({ gamings }) => {
  const [input, setInput] = useState({
    quantity: 0,
  });
  const handelChange = (e) => {
    setInput((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const [items, setItems] = useState([]);

  const fun = (id, name, price, image) => {
    setItems({
      id: id,
      name: name,
      price: price,
      image: image,
      quantity: input.quantity,
    });
    console.log("done");
  };

  useEffect(() => {
    localStorage.setItem(`gaming${items.id}`, JSON.stringify(items));
  }, [items]);

  return (
    <div className="details-container p-5">
      {gamings.map((gaming) => (
        <div className="row" key={gaming.id}>
          <div className="col-3">
            <img className="img-fluid" src={gaming.image} alt="" />
          </div>
          <div className="col-9">
            <h3>{gaming.name}</h3>
            <p>{gaming.description}</p>
            <div class="price">
              <h4>PRICE : ${gaming.price}</h4>
              <div>
                count:
                <input
                  type="number"
                  id="quantity"
                  name="quantity"
                  min="1"
                  max="5"
                  onChange={handelChange}
                />
              </div>
            </div>
          </div>
          <Button
            className="btn btn-dark w-100"
            variant="primary"
            type="submit"
          >
            {/* <Link className="btn btn-dark w-100" to="/payment">Buy Now</Link> */}

            <div
              onClick={() =>
                fun(gaming.id, gaming.name, gaming.price, gaming.image)
              }
            >
              buy now
            </div>
          </Button>
        </div>
      ))}
      <hr />
      <h5 className="text-center bg-dark text-white p-2">Review Products</h5>
      <ReviewProduct />
      <ReviewProduct />
    </div>
  );
};

export default Gaming;
