///////////GAMING LIST

import React from "react";
import Gaming from "./Gaming";
const ProductList3 = () => {
  const gamings = [
    {
      id: 1,
      name: "PlayStation 4 Controllers",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s.",
      price: 20,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT94C-562kEyuwUNuU75UcppCEeYJXp9SOuNw&usqp=CAU",
    },
    {
      id: 2,
      name: "Fifa 23",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s.",
      price: 15,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqYWfk9wDFFoB6mSIpkN4pMdQXk1wUx17gQQ&usqp=CAU",
    },
  ];

  return (
    <div>
      <h1>Gaming List</h1>
      <Gaming gamings={gamings} />
    </div>
  );
};

export default ProductList3;
