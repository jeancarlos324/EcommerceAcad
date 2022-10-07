import axios from "axios";
import React from "react";
import { Button, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();

  const submit = (data) => {
    console.log(data)
    axios
      .post("https://ecommerce-api-react.herokuapp.com/api/v1/users", data)
      .then(() => {
        navigate("/login");
      })
      .catch((error) => {
        console.log(error)
        if (error.response.status == 404) {
          alert(error.response.data.message);
        }
      });
  };
  return (
    <div className="container flex flex-col items-center py-5">
      <div className="w-1/2 p-5 bg-white rounded-xl shadow-lg">
        <h1>Sin Up</h1>
        <Form onSubmit={handleSubmit(submit)}>
          <Form.Group className="mb-3" controlId="formBasicFirstName">
            <Form.Label className="font-bold">First Name</Form.Label>
            <Form.Control
              {...register("firstName")}
              type="text"
              placeholder="Enter First Name"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicLastName">
            <Form.Label className="font-bold">Last Name</Form.Label>
            <Form.Control
              {...register("lastName")}
              type="text"
              placeholder="Enter Last Name"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label className="font-bold">Email Address</Form.Label>
            <Form.Control
              {...register("email")}
              type="email"
              placeholder="Enter email"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label className="font-bold">Password</Form.Label>
            <Form.Control
              {...register("password")}
              type="password"
              placeholder="Password"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPhone">
            <Form.Label className="font-bold">Phone</Form.Label>
            <Form.Control
              {...register("phone")}
              type="number"
              placeholder="Phone"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicRole">
            <Form.Label className="font-bold">Role</Form.Label>
            <Form.Control
              {...register("role")}
              type="text"
              placeholder="Role"
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Register
          </Button>
        </Form>
        <div className="pt-3">
          <span>
            Do you have an account? <Link to={"/login"}>Sing In</Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Register;
