import React from "react";
import { Link } from "react-router-dom";

import "./item.css";

const ProductItem = ({ data }) => {
  return (
    <div className="item__wrapper">
      <Link to={`/${data.category}/detail/${data.id}`}>
        <div className="img__wrapper">
          <img src={data.url} alt={data.name} />
          <div className="item__price">
            <span>${data.price}</span>
          </div>
        </div>
        <div className="item__title">
          <h3>{data.name}</h3>
        </div>
      </Link>
    </div>
  );
};

export default ProductItem;
