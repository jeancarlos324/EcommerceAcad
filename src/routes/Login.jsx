import axios from "axios";
import React from "react";
import { Button, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();

  const submit = (data) => {
    axios
      .post(
        "https://ecommerce-api-react.herokuapp.com/api/v1/users/login",
        data
      )
      .then((res) => {
        localStorage.setItem("token", res.data.data.token);
        navigate("/");
      })
      .catch((error) => {
        if (error.response.status == 404) {
          alert(error.response.data.message);
        }
      });
  };
  //credenciales invalidas

  return (
    <div className="container flex flex-col items-center py-5">
      <div className="w-1/2 p-5 bg-white rounded-xl shadow-lg">
        <div className="flex flex-col items-start bg-sky-500 pl-3 py-2 text-slate-700">
          <h6 className="text-price-card font-bold">Test User</h6>
          <span>
            <b>UserName: </b>john@gmail.com
          </span>
          <span>
            <b>Password: </b>john1234
          </span>
        </div>
        <h1>Login</h1>
        <Form onSubmit={handleSubmit(submit)}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label className="font-bold">Email Address</Form.Label>
            <Form.Control
              {...register("email")}
              type="email"
              placeholder="Enter email"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              {...register("password")}
              type="password"
              placeholder="Password"
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Login
          </Button>
        </Form>
       <div className="pt-3">
       <span>You don't have an account <Link to={"/register"}>Sing Up</Link></span>
       </div>
      </div>
    </div>
  );
};

export default Login;
