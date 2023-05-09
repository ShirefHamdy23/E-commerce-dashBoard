import React, { useState, useEffect } from "react";
import ReviewProduct from "../ReviewProduct";
import "../component/style/Mobiles.css";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

const Brands = ({ brands }) => {
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
      quantity: input.quantity,
      image: image,
    });
    console.log("done");
  };

  useEffect(() => {
    localStorage.setItem(`brands${items.id}`, JSON.stringify(items));
  }, [items]);

  return (
    <div className="-details.container p-5">
      {brands &&
        brands.map((brand) => (
          <>
            <div key={brand.id} className="row">
              <div className="col-3">
                <img className="product-image" src={brand.image} alt="" />
              </div>
              <div className="col-9">
                <h3>{brand.name}</h3>
                <p>{brand.description}</p>
                <div className="price">
                  <h4>PRICE : ${brand.price}</h4>
                </div>
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

              <Button
                className="btn btn-dark w-100"
                variant="primary"
                type="submit"
              >
                {/* <Link className="btn btn-dark w-100" to="/payment">Buy Now</Link> */}
                <div
                  onClick={() =>
                    fun(brand.id, brand.name, brand.price, brand.image)
                  }
                >
                  Add To Cart
                </div>
              </Button>
              <hr />
            </div>
          </>
        ))}
      <hr />
      <h5 className="text-center bg-dark text-white p-2">Review brands</h5>
      {brands && brands.map((brand) => <ReviewProduct key={brand.id} />)}
    </div>
  );
};

export default Brands;
