import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link, useNavigate } from "react-router-dom";
import CardSidebar from "./CardSidebar";
import { motion } from "framer-motion";
//https://loading.io/css/
const NavigatorStore = () => {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const logout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const tokenExists = () => {
    const token = localStorage.getItem("token");
    if (token == undefined) {
      return false;
    } else {
      return true;
    }
  };
  return (
    <>
      <div className="fixed w-screen z-10">
        <div className="hidden md:flex pl-5 py-1 gap-5 w-full bg-gray-gradiant text-white text-descrip">
          <span>Ecommerce Academlo</span>
          <span>Phone Number (+123) 123-123-1234</span>
        </div>
        <Navbar
          className="flex flex-col bg-primary-color "
          variant="dark"
          expand="lg"
        >
          <Container className="text-white">
            <Navbar.Brand to="/" as={Link}>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="text-white relative font-bold z-10"
              >
                <span className=" rounded-full bg-white text-primary-color px-[2px] py-[6px]">
                  Eco
                </span>
                <span className="mx-1 font-normal">mmerce</span>
                <i className="fa-regular fa-lightbulb text-white scale-125 "></i>
              </motion.div>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse
              id="basic-navbar-nav"
              className="flex md:justify-end"
            >
              <Nav className="flex gap-4">
                <Nav.Link as={Link} to="/product" className=" text-white">
                  <motion.div whileHover={{ scale: 1.2 }} className="flex ">
                    <span className="mr-2 capitalize font-semibold">
                      Products
                    </span>
                  </motion.div>
                </Nav.Link>
                <Nav.Link as={Link} to="/purchases" className=" text-white">
                  <motion.div whileHover={{ scale: 1.2 }} className="flex ">
                    <span className="mr-2 capitalize font-semibold">
                      Purcharse
                    </span>
                  </motion.div>
                </Nav.Link>
                {tokenExists() ? (
                  <Nav.Link onClick={logout} className=" text-white">
                    <motion.div whileHover={{ scale: 1.2 }} className="flex ">
                      <i className="fa-solid fa-right-from-bracket text-[24px]"></i>
                      <span className="md:hidden mr-2 capitalize font-semibold pl-2">
                        Log Out
                      </span>
                    </motion.div>
                  </Nav.Link>
                ) : (
                  <Nav.Link as={Link} to="/login">
                    Login
                  </Nav.Link>
                )}
                <Nav.Link onClick={handleShow} className=" text-white">
                  <motion.i
                    whileHover={{ scale: 1.2 }}
                    className="fa-solid fa-cart-shopping text-white text-[24px] "
                  >
                    <span className="md:hidden mr-2 capitalize font-semibold pl-2 text-[18px]">
                      Cart
                    </span>
                  </motion.i>
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <CardSidebar show={show} handleClose={handleClose} />
      </div>
      <div className="h-[50px] md:h-[87px]"></div>
    </>
  );
};

export default NavigatorStore;
