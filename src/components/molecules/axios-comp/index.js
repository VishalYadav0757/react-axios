import React, { useState, useEffect } from "react";
import axios from "axios";
import ProductCard from "../../atoms/product-card";
import "./index.css";

const AxiosComponent = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get("https://fakestoreapi.com/products");

      if (response.status !== 200) {
        throw new Error("Something went wrong :(");
      }

      setData(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <>
      <h1>Products data fetched using 'Axios'</h1>
      <div className="product-list">
        {data?.map((item, index) => (
          <div key={index} className="product-card">
            <ProductCard data={item} />
          </div>
        ))}
      </div>
    </>
  );
};

export default AxiosComponent;
