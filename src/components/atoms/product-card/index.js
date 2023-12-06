import React, { useEffect, useState } from "react";
import "./index.css";

const ProductCard = (props) => {
  const [data, setData] = useState({});

  useEffect(() => {
    setData(props?.data);
  }, [props]);

  return (
    <div className="product-card-wrpr">
      <div className="product-img">
        <img src={data?.image} alt="product-img" />
      </div>
      <div className="product-title">{data?.title}</div>
      <div className="product-desc">{data?.description}</div>
      <div className="product-price">
        <span>${data?.price}</span>
        <span>{data?.rating?.rate}/5</span>
      </div>
    </div>
  );
};

export default ProductCard;
