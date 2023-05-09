import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./style/cart.css";
const Cart = () => {
  const [brands1, setBrands1] = useState("");
  const [brands2, setBrands2] = useState("");
  const [gaming1, setGaming1] = useState("");
  const [gaming2, setGaming2] = useState("");
  const [Mobiles1, setMobiles1] = useState("");
  const [Mobiles2, setMobiles2] = useState("");
  useEffect(() => {
    setBrands1(JSON.parse(localStorage.getItem("brands1")));
    setBrands2(JSON.parse(localStorage.getItem("brands2")));
    setGaming1(JSON.parse(localStorage.getItem("gaming1")));
    setGaming2(JSON.parse(localStorage.getItem("gaming2")));
    setMobiles1(JSON.parse(localStorage.getItem("Mobiles1")));
    setMobiles2(JSON.parse(localStorage.getItem("Mobiles2")));
  }, []);

  return (
    <>
      <div className="container">
        {brands1 === null ? null : (
          <div>
            <img className="" src={brands1.image} />
            <div>
              <span>name:</span>
              <span>{brands1.name}</span>
            </div>
            <div>
              <span>price:</span>
              <span>{brands1.price}</span>
            </div>
            <div>
              <span>quantity:</span>
              <span>{brands1.quantity}</span>
            </div>
          </div>
        )}
        {brands2 === null ? null : (
          <div>
            <img className="" src={brands2.image} />
            <div>
              <span>name:</span>
              <span>{brands2.name}</span>
            </div>
            <div>
              <span>price:</span>
              <span>{brands2.price}</span>
            </div>
            <div>
              <span>quantity:</span>
              <span>{brands2.quantity}</span>
            </div>
          </div>
        )}
        {gaming1 === null ? null : (
          <div>
            <img className="" src={gaming1.image} />
            <div>
              <span>name:</span>
              <span>{gaming1.name}</span>
            </div>
            <div>
              <span>price:</span>
              <span>{gaming1.price}</span>
            </div>
            <div>
              <span>quantity:</span>
              <span>{gaming1.quantity}</span>
            </div>
          </div>
        )}
        {gaming2 === null ? null : (
          <div>
            <img className="" src={gaming2.image} />
            <div>
              <span>name:</span>
              <span>{gaming2.name}</span>
            </div>
            <div>
              <span>price:</span>
              <span>{gaming2.price}</span>
            </div>
            <div>
              <span>quantity:</span>
              <span>{gaming2.quantity}</span>
            </div>
          </div>
        )}
        {Mobiles1 === null ? null : (
          <div>
            <img className="" src={Mobiles1.image} />
            <div>
              <span>name:</span>
              <span>{Mobiles1.name}</span>
            </div>
            <div>
              <span>price:</span>
              <span>{Mobiles1.price}</span>
            </div>
            <div>
              <span>quantity:</span>
              <span>{Mobiles1.quantity}</span>
            </div>
          </div>
        )}
        {Mobiles2 === null ? null : (
          <div>
            <img className="" src={Mobiles2.image} />
            <div>
              <span>name:</span>
              <span>{Mobiles2.name}</span>
            </div>
            <div>
              <span>price:</span>
              <span>{Mobiles2.price}</span>
            </div>
            <div>
              <span>quantity:</span>
              <span>{Mobiles2.quantity}</span>
            </div>
          </div>
        )}
      </div>
      <Link className="btn btn-dark w-100" to="/payment">
        Buy Now
      </Link>
    </>
  );
};

export default Cart;
