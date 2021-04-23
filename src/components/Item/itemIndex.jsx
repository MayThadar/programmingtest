import React from "react";
import { Link } from "react-router-dom";

import "./item.css";

const ProductItem = ({ data }) => {
  return (
    <div className="item__wrapper">
      <Link to={`/${data.category}`}>
        <div className="img__wrapper">
          <img src={data.url} alt={data.name} />
        </div>
        <div className="item__name">
          <h3>{data.category}</h3>
        </div>
      </Link>
    </div>
  );
};

export default ProductItem;
