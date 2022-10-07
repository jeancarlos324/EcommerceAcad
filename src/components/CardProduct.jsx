import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { motion } from "framer-motion";
import { addToCart } from "../store/slice/cart.slice";
import { useDispatch } from "react-redux";
const CardProduct = ({ data, onClick }) => {
  const [rate, setRate] = useState(1);
  const dispatch = useDispatch();

  const addCard = () => {
    const newProductToCart = {
      id: idProduct,
      quantity: rate,
    };
    dispatch(addToCart(newProductToCart));
  };
  return (
    <Card onClick={onClick} className="shadow-md">
      <span className="absolute -left-[1px] top-4 font-bold uppercase bg-green-600 text-white px-2 rounded-r-xl">
        {data.status == "active" ? "Stock available" : "no available"}
      </span>
      <Card.Img
        variant="top"
        src={data.productImgs[0]}
        className="h-[200px] object-scale-down  object-top p-2"
      />
      <Card.Body>
        <Card.Title className="text-title-card h-[40px] ">
          {data.title}
        </Card.Title>
        <div>
          <p className="flex text-descrip gap-1">
            <span>Category:</span>
            <span className="font-semibold">{data.category.name}</span>
          </p>
          <p className="flex justify-end text-blue-gradiant gap-1">
            <span className="text-gray-gradiant text-descrip">Price: </span>
            <span className="text-price-card">$ {data.price}</span>
          </p>
        </div>
        <hr className="h-[4px] w-full bg-primary-color-gradient rounded" />
        <div
          onClick={(e) => e.stopPropagation()}
          className="flex w-full justify-end"
        >
          <motion.button
            onClick={() => dispatch(addToCart({ id: data.id, quantity: 1 }))}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
            variant="primary"
            className="bg-primary-color py-2 rounded-xl text-right px-2 flex gap-1 text-white"
          >
            <i className="fa-solid fa-cart-shopping text-white text-[24px] "></i>
          </motion.button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default CardProduct;
