import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useHistory } from "react-router-dom";
import Slider from "react-slick";

import "./Detail.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Detail = () => {
  const { id } = useParams();
  const history = useHistory();
  const [product, setProduct] = useState(null);
  const [productList, setProductList] = useState([]);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
  };

  useEffect(() => {
    fetch("http://139.59.244.121/my_items")
      .then((res) => res.json())
      .then((data) => {
        setProductList(data);
        let product = data.find((item) => item.id == id);
        setProduct(product);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, [id]);

  const filter = () => {
    let index = productList.findIndex((item) => item.id == id);
    let temp = [...productList];
    temp.splice(index, 1);
    return temp;
  };

  if (!product)
    return (
      <div className="loading">
        <h1>Loading...</h1>
      </div>
    );

  return (
    <div className="detail__wrapper">
      <div className="back__btn" onClick={() => history.push(`/${product.category}`)}>
        <span>{`<`}</span>Back
      </div>
      <div className="detail__content">
        <h1>{product.name}</h1>
        <img src={product.url} alt={product.name} />
        <div className="detail__price">
          <h3>
            <strong>Price</strong> : ${product.price}
          </h3>
        </div>
        <div className="detail__catg">
          <h3>
            <strong>Category</strong> : {product.category}
          </h3>
        </div>
      </div>
      <div className="detail__slider">
        <Slider {...settings}>
          {filter().map((item) => (
            <img
              key={item.id}
              className="slider__item"
              src={item.url}
              alt={item.name}
              onClick={() => history.push(`/${item.category}/detail/${item.id}`)}
            />
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Detail;
