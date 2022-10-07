import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  Accordion,
  Button,
  Form,
  InputGroup,
  ListGroup,
  ListGroupItem,
} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import CardProduct from "../components/CardProduct";
import CarouselProduct from "../components/CarouselProduct";
import { getProductsThunk } from "../store/slice/product.slice";
import { motion } from "framer-motion";
const Home = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const productsList = useSelector((state) => state.products);
  const [categories, setCategories] = useState([]);
  const [productFiltered, setProductFiltered] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  useEffect(() => {
    axios
      .get(
        "https://ecommerce-api-react.herokuapp.com/api/v1/products/categories"
      )
      .then((res) => setCategories(res.data.data.categories));
  }, []);

  useEffect(() => {
    setProductFiltered(productsList);
  }, [productsList]);

  const filterCategory = (categoryId) => {
    const filterData = productsList.filter(
      (product) => product.category.id == categoryId
    );
    setProductFiltered(filterData);
  };

  const searchProduct = () => {
    const filterSearch = productsList.filter((product) =>
      product.title.toLowerCase().includes(searchValue.toLowerCase())
    );
    setProductFiltered(filterSearch);
  };
  console.log(productFiltered);
  return (
    <div className="pb-5">
      <CarouselProduct />
      <div className="flex flex-col items-center bg-white mb-3">
        <div className="w-full md:w-4/5">
          <InputGroup className=" p-3">
            <Form.Control
              placeholder="Search what you want so much!!!!"
              aria-label="Example text with button addon"
              aria-describedby="basic-addon1"
              onChange={(e) => setSearchValue(e.target.value)}
              value={searchValue}
            />
            <motion.button
              className="bg-primary-color text-white py-1 px-3 rounded-xl"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
              variant="warning"
              id="button-addon1"
              onClick={searchProduct}
            >
              Search
            </motion.button>
          </InputGroup>
        </div>
      </div>
      <div className="flex flex-col md:flex-row container gap-3">
        <Accordion className=" md:w-1/5 ">
          <Accordion.Item>
            <Accordion.Header> Categories</Accordion.Header>
            <Accordion.Body className="p-0">
              <ListGroup variant="flush">
                {categories.map((category) => (
                  <ListGroupItem
                    action
                    key={category.id}
                    className="cursor-pointer"
                    onClick={() => filterCategory(category.id)}
                  >
                    {category.name}
                  </ListGroupItem>
                ))}
              </ListGroup>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
        <div className=" w-full md:w-4/5">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {productFiltered.map((product) => (
              <CardProduct
                key={product.id}
                data={product}
                onClick={() => navigate(`/product/${product.id}`)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
