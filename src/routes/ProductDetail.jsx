import React, { useEffect, useState } from "react";
import { Button, Col, ListGroup, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { addToCart } from "../store/slice/cart.slice";
import Carousel from "react-bootstrap/Carousel";
import { motion } from "framer-motion";
import CardProduct from "../components/CardProduct";
const ProductDetail = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const [rate, setRate] = useState(1);
  const productList = useSelector((state) => state.products);
  const productDetail = productList.find(
    (product) => product?.id === Number(id)
  );

  useEffect(() => {
    setRate(1);
  }, [id]);

  const addCard = () => {
    const newProductToCart = {
      id: id,
      quantity: rate,
    };
    dispatch(addToCart(newProductToCart));
  };

  const relatedProduct = productList.filter(
    (product) => product.category.id === productDetail?.category.id
  );
  console.log(relatedProduct);
  return (
    <div className="container py-4 flex flex-col gap-3">
      <div className="w-full flex flex-col md:flex-row bg-white gap-4 drop-shadow-lg">
        <div className=" w-full md:w-1/3">
          <Carousel fade variant="dark">
            {productDetail?.productImgs.map((image) => (
              <Carousel.Item key={image} className="bg-white p-2">
                <img
                  className=" h-[400px] object-scale-down "
                  src={image}
                  alt="First slide"
                />
              </Carousel.Item>
            ))}
          </Carousel>
        </div>
        <div className="w-full md:w-2/3 flex flex-col  items-start p-5 pt-5">
          <h3 className="font-semibold">{productDetail?.title}</h3>
          <p className="text-justify text-descrip">
            {productDetail?.description}
          </p>
          <div className="flex justify-between w-full ">
            <div className="text-price-card">
              <span className="font-bold">
                <b className="text-descrip font-normal">Price: </b>$
                {productDetail?.price}
              </span>
            </div>
            <div className=" mb-5">
              <Button className="me-3" onClick={() => setRate(rate - 1)}>
                -
              </Button>
              {rate}
              <Button className="ms-3" onClick={() => setRate(rate + 1)}>
                +
              </Button>
              <br />
            </div>
          </div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
            className="w-full px-10 bg-primary-color text-white rounded-xl py-2 "
            onClick={addCard}
          >
            Add to Card
          </motion.button>
        </div>
      </div>
      <div className="w-full flex flex-col md:flex-row bg-white gap-4 drop-shadow-lg">
        <ListGroup variant="flush" className="w-full">
          <h5 className="pl-3 uppercase font-bold pt-2">suggested products</h5>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-2">
            {relatedProduct.map((categories) => (
              <ListGroup.Item key={categories.id}>
                <Link to={`/product/${categories.id}`} className="no-underline">
                  <CardProduct data={categories} />
                </Link>
              </ListGroup.Item>
            ))}
          </div>
        </ListGroup>
      </div>
    </div>
  );
};

export default ProductDetail;
