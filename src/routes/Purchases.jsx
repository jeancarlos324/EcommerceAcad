import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getPurchasesThunk } from "../store/slice/purchases.slice";
import Card from "react-bootstrap/Card";
const Purchases = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const purchases = useSelector((state) => state.purchases);
  useEffect(() => {
    dispatch(getPurchasesThunk());
  }, []);

  const converToDate = (DateNow) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    const date = new Date(DateNow).toLocaleDateString("en-us", options);
    return date;
  };
  return (
    <div>
      <h2 className="container font-semibold pt-4 pb-2">My purchases</h2>
      <div className="flex flex-col container pb-5 gap-5">
        {purchases.map((purchase) => (
          <Card key={purchase.cartId}>
            <Card.Header className="flex justify-between md:px-5">
              <div>
                <span className="font-semibold text-descrip">
                  Purchase Cod:{" "}
                </span>
                <span className="text-price">N° {purchase.cartId}</span>
              </div>
              <div className="text-btn-card">
                {converToDate(purchase.createdAt)}
              </div>
            </Card.Header>
            <Card.Body>
              <div className="flex uppercase text-descrip font-bold">
                <div className="w-1/3 md:w-1/4 text-center">Product</div>
                <div className="w-1/3 md:w-1/4 text-center">Quantity</div>
                <div className="hidden md:block w-1/4 text-center">Price Unit</div>
                <div className="w-1/3 md:w-1/4 text-center">Subtotal</div>
              </div>
              {purchase.cart.products.map((product) => (
                <div
                  onClick={() => navigate(`/product/${product.id}`)}
                  key={product.id}
                  className="flex hover:bg-slate-100 cursor-pointer"
                >
                  <div className="flex flex-col w-1/3 md:w-1/4">
                    <span className=" text-gray-500">
                      Brand:{" "}
                      <b className="text-descrip uppercase">{product.brand}</b>
                    </span>
                    <h5 className="font-semibold">{product.title}</h5>
                  </div>
                  <div className="w-1/3 md:w-1/4 text-center flex flex-col justify-center item-center">
                    {product.productsInCart.quantity}
                  </div>
                  <h6 className="hidden w-1/4 text-center md:flex flex-col justify-center item-center">
                    $ {product.price}
                  </h6>
                  <span className="w-1/3 md:w-1/4 text-center flex flex-col justify-center item-center">
                    $ {product.productsInCart.quantity * product.price}{" "}
                  </span>
                </div>
              ))}
              <hr></hr>
              <div className="flex justify-around items-center">
                <span className="uppercase font-bold">Total</span>
                <span className="font-bold ">
                  ${" "}
                  {purchase.cart.products
                    .map(
                      (product) =>
                        product.productsInCart.quantity * product.price
                    )
                    .reduce((a, b) => a + b, 0)}
                </span>
              </div>
            </Card.Body>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Purchases;
