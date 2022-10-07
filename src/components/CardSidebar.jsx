import React, { useEffect } from "react";
import { Button, Card, ListGroup, ListGroupItem } from "react-bootstrap";
import Offcanvas from "react-bootstrap/Offcanvas";
import { useDispatch, useSelector } from "react-redux";
import { motion } from "framer-motion";
import {
  deleteToCart,
  getCartThunk,
  purchaseCartThunk,
} from "../store/slice/cart.slice";

const CardSidebar = ({ show, handleClose }) => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  useEffect(() => {
    dispatch(getCartThunk());
  }, []);
  return (
    <div>
      <Offcanvas show={show} onHide={handleClose} placement="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title className="font-bold">
            <b>Products in Cart</b>
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <ListGroup className="flex flex-col gap-3">
            {cart.length !== 0 ? (
              cart.map((product) => (
                <ListGroupItem key={product.id} className="p-0">
                  <Card>
                    <Card.Header className="flex justify-between items-center p-2">
                      <span className="text-slate-500">{product.brand}</span>
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.9 }}
                        transition={{
                          type: "spring",
                          stiffness: 400,
                          damping: 17,
                        }}
                        className=" text-gray-700 "
                        onClick={() => dispatch(deleteToCart(product.id))}
                      >
                        <i className="fa-solid fa-trash-can"></i>
                      </motion.button>
                    </Card.Header>
                    <Card.Body>
                      <div className="flex flex-col items-start">
                        <h6 className="font-bold">{product.title}</h6>
                        <span className="text-descrip">
                          <b>Quantity: </b>
                          {product.productsInCart.quantity}
                        </span>
                        <span className="text-descrip">
                          <b>Price Unit: </b>${product.price}
                        </span>
                        <span className="text-descrip">
                          <b>Subtotal: </b>$
                          {product.productsInCart.quantity * product.price}
                        </span>
                      </div>
                    </Card.Body>
                  </Card>
                </ListGroupItem>
              ))
            ) : (
              <div className="flex flex-col items-center text-gray-gradiant">
                <span className="text-[40px] font-bold">Ups!!</span>
                <img
                  src="https://casamania.es/wp-content/uploads/2021/09/carrito-vacio-casamania.png"
                  alt=""
                />
                <span className="text-btn-card font-bold">
                  You have nothing in your cart
                </span>
              </div>
            )}
          </ListGroup>
        </Offcanvas.Body>
        <div className="flex w-full justify-between py-2 px-10">
          <span className="font-bold uppercase">Total</span>
          <span className="font-bold text-price-card">
            {"$ "}
            {cart
              .map((product) => product.productsInCart.quantity * product.price)
              .reduce((a, b) => a + b, 0)}
          </span>
        </div>
        <div className="flex w-full justify-center py-2">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
            className="bg-primary-color w-4/5 m-0 py-2 rounded-xl text-white "
            onClick={() => dispatch(purchaseCartThunk())}
          >
            Check Out
          </motion.button>
        </div>
      </Offcanvas>
    </div>
  );
};

export default CardSidebar;
