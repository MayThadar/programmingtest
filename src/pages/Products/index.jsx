import React, { useState, useEffect } from "react";
import ProductItem from "./itemIndex";
import { useParams } from "react-router-dom";
import { useHistory } from "react-router-dom";
import "./Products.css";

const Products = () => {
  const { category } = useParams();
  const history = useHistory();
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    fetch("http://139.59.244.121/my_items")
      .then((res) => res.json())
      .then((data) => {
        setProductList(data);
      })
      .catch((err) => {

        console.log(err.message);
      });
  }, []);
  if (!productList)
    return (
      <div className="loading">
        <h1>Loading...</h1>
      </div>
    );
    var categories = []
    for (var product in productList){
      if (productList[product].category==category){
        categories.push(productList[product])
      }
    }
  return (

 
    <div className="products__wrapper">
      <div className="back__btn" onClick={() => history.push(`/`)}>
        <span>{`<`}</span>Back
      </div>
      <h1>{category}</h1>
      <div className="products__list">
        {categories.map((item) => (
          <ProductItem key={item.id} data={item} />
        ))}
      </div>
    </div>

  );
};

export default Products;
