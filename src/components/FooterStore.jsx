import React from "react";
import { motion } from "framer-motion";
const FooterStore = () => {
  return (
    <footer className="flex bg-gray-gradiant text-white p-4">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 px-4">
          <div className="pr-5 text-justify">
            <div className="pr-xl-4">
              <a className="brand no-underline" href="index.html">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="text-white relative font-bold z-10 text-xl py-2"
                >
                  <span className=" rounded-full bg-white text-primary-color px-[2px] py-[6px]">
                    Eco
                  </span>
                  <span className="mx-1 font-normal">mmerce</span>
                  <i className="fa-regular fa-lightbulb text-white scale-125 "></i>
                </motion.div>
              </a>
              <p className="hidden md:block">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s
              </p>
              <p className="font-semibold">
                <span>© 2022 Academlo All Rights Reserved.</span>
              </p>
            </div>
          </div>
          <div className="">
            <h5 className="uppercase font-bold">Contacts</h5>
            <dl className="contact-list">
              <dt>Address:</dt>
              <dd>798 Nevermind Avenue, Far away , Far far away</dd>
            </dl>
            <dl className="contact-list">
              <dt>Email:</dt>
              <dd>
                <a href="mailto:#">ecommerce@ecommerce.com</a>
              </dd>
            </dl>
            <dl className="contact-list">
              <dt>Phone:</dt>
              <dd>
                <a href="tel:#">(+123) 123-123-1234</a>
              </dd>
            </dl>
          </div>
          <div className="">
          <h5 className="uppercase font-bold">Social</h5>
            <motion.div
              whileHover={{ scale: 1.05, color: "rgba(255, 110, 0,1)" }}
            >
              <a
                className="no-underline text-white hover:text-slate-400 flex gap-1 items-center"
                href="#"
              >
                <i className="fa-brands fa-facebook"></i>
                <span>Facebook</span>
              </a>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05, color: "rgba(255, 110, 0,1)" }}
            >
              <a
                className="no-underline text-white hover:text-slate-400 flex gap-1 items-center"
                href="#"
              >
                <i className="fa-brands fa-instagram"></i>
                <span>Instagram</span>
              </a>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05, color: "rgba(255, 110, 0,1)" }}
            >
              <a
                className="no-underline text-white hover:text-slate-400 flex gap-1 items-center"
                href="#"
              >
                <i className="fa-brands fa-twitter"></i>
                <span>Twitter</span>
              </a>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05, color: "rgba(255, 110, 0,1)" }}
            >
              <a
                className="no-underline text-white hover:text-slate-400 flex gap-1 items-center"
                href="#"
              >
                <i className="fa-brands fa-google"></i>
                <span>Google</span>
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterStore;
