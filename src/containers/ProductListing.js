import React from "react";
import { useDispatch } from "react-redux";
import axios from "axios";
import ProductComponent from "./ProductComponent";
import { useEffect } from "react";
import { setProducts } from "../redux/Action/productsActions";

const ProductListing = () => {
  const dispatch = useDispatch();

  const fetchProducts = async () => {
    const response = await axios
      .get("https://fakestoreapi.com/products")
      .catch((err) => {
        console.log("Err", err);
      });
    dispatch(setProducts(response.data));
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="ui grid container">
      <ProductComponent />
    </div>
  );
};

export default ProductListing;
