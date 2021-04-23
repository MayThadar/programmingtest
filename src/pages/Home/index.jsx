import React, { useState, useEffect } from "react";
import ProductItem from "../../components/Item/itemIndex";

import "./Home.css";

const Home = () => {
  const [productList, setProductList] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch("http://139.59.244.121/my_items")
      .then((res) => res.json())
      .then((data) => {
        setLoading(false);
        setProductList(data);
      })
      .catch((err) => {
        setLoading(false);
        console.log(err.message);
      });
  }, []);
  var arr=[];
  var categories=[];
  for (var product in productList) {
    if (!arr.includes(productList[product].category)){
      arr.push(productList[product].category)
      categories.push(productList.find((item) => item.category == productList[product].category))
    }
  }
  if (loading)
    return (
      <div className="loading">
        <h1>Loading...</h1>
      </div>
    );

  return (
    <div className="home__wrapper">
      <h1>Categories</h1>
      <div className="home__list">
        {categories.map((item) => (
          <ProductItem key={item.id} data={item} />
        ))}
      </div>
    </div>
  );
};

export default Home;
